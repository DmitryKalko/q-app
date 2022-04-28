import { shallow } from "enzyme";
import React from "react";
import FirstStep from "../FirstStep";


const setUp = () => shallow(<FirstStep/>);

describe('FirstStep component', () => {
    let component;
    let instance;
    beforeEach(() => {
        component = setUp();  // сюда присваивается результат функции shallow, которая выполняет отрисовку компонента
        instance = component.instance(); 
        // у результата работы shallow есть метод instance, который возвращает наш компонент. после вызова instance компонента мы можем обращаться к его свойствам и методам
    })
    test('should render FirstStep component', () => {
        expect(component).toMatchSnapshot();
    });

    // describe('FirstStep handlers', () => {
    //     test('should handle search input value', () => {
    //         expect(component.state().searchQuery).toBe('')  // не работает с функциональными компонентами
    //         instance.handleInputChange({target:{value: 'test'}})
    //         expect(component.state().searchQuery).toBe('test')
    //     })
    // })
})