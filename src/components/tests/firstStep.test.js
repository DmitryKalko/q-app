import { shallow } from "enzyme";
import React from "react";
import FirstStep from "../FirstStep";


const setUp = () => shallow(<FirstStep  />);

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


    it('FirstStep inputs', () => {
        const testState = { name: 'denn', lastName: 'kalko' };
        expect(component.find('input').at(0).prop('value')).toEqual('');
        expect(component.find('input').at(1).prop('value')).toEqual('');
        component.find('input').at(0).simulate('change', { target: { name: 'name', value: 'denn' } });
        component.find('input').at(1).simulate('change', { target: { name: 'age', lastName: 'kalko' } });
        expect(testState.name).toEqual('denn');
        expect(testState.lastName).toEqual('kalko');
      });

})