import { shallow } from "enzyme";
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
        console.log(component.debug());
    });
    it('should contain .main wrapper', () => {
        const wrapper = component.find('div'); 
        expect(wrapper.length).toBeGreaterThan(1); 
        console.log(component.debug());
    });
});


describe('make snaphots', () => {
    it('should shallow App component', () => {
        const component = shallow(<App/>)
        expect(component).toMatchSnapshot();
    });
    it('should render App component', () => {
        const component = render(<App/>)
        expect(component).toMatchSnapshot();
    });
    // it('should mount  App component', () => {
    //     const component = mount(<App/>)
    //     expect(component).toMatchSnapshot();
    // });
});



