import { shallow } from "enzyme";
import {jest} from '@jest/globals'
import React from "react";
import App from "../App";


const setUp = (props) => shallow(<App {...props}/>);  // shallow осуществляет неглубокую отрисовку - рендерится только наш компенент, без дочерних

describe('should render App component', () => {
    let component;
    beforeEach(() => {   // будет выполнять логику перед запуском каждого из тестов. полезно бля однотипных тестов
        component = setUp();
    });
    it('should contain .main wrapper', () => {
        const wrapper = component.find('.main');  // находим класс main. можно искать и по тегам
        expect(wrapper.length).toBe(1); // проверям что он встречается только один раз в нашем компоненте
        // console.log(component.debug());
    });
    it('should contain .main wrapper', () => {
        const wrapper = component.find('div'); 
        expect(wrapper.length).toBeGreaterThan(1); 
        // console.log(component.debug());
    });
});


describe('make snaphots', () => {
    it('should shallow App component', () => {
        const component = shallow(<App/>)   // shallow осуществляет неглубокую отрисовку - рендерится только наш компенент, без дочерних. по всемени - самый быстрый
        expect(component).toMatchSnapshot();
    });
    // it('should render App component', () => {
    //     const component = render(<App/>)  // рендерится целевой компонент с дочерними. используется именно для проверки разметки. по времени - средний
    //     expect(component).toMatchSnapshot();
    // });
    // it('should mount  App component', () => {
    //     const component = mount(<App/>)     // рендерится целевой компонент с дочерними. используется если нужно тестить методы жизненного цикла или поведение дочерних элементов. по времени - самый долгий
    //     expect(component).toMatchSnapshot();
    // });

    it('should handle the click event', () => {
        window.alert = jest.fn();                     // мокаем функцию alert
        const component = shallow(<App/>)
        component.simulate('click');                 // эмитируем клик
        expect(window.alert).toHaveBeenCalledWith('Please fill in all fields');
      });
});

it('should do some stuff on window resize event', () => {
    const wrapper = mount(<App />);
    const spy = jest.spyOn(wrapper.instance(), 'handleWindowResize');

    // set spy to 'resize' listener
    global.addEventListener('resize', spy);
    global.dispatchEvent(new Event('resize'));

    expect(spy).toHaveBeenCalled();
});


