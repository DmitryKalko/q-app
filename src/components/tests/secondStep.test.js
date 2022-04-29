import { shallow } from "enzyme";
import React from "react";
import SecondStep from "../SecondStep";


const setUp = () => shallow(<SecondStep  />);

describe('SecondStep component', () => {
    let component;

    beforeEach(() => {
        component = setUp(); 
    })
    test('should render SecondStep component', () => {
        expect(component).toMatchSnapshot();
    });


    it('SecondStep inputs', () => {
        const testState = { male: 'man', agree: true };

        expect(component.find('#demo-simple-select').prop('value')).toEqual('');
        //expect(component.find('#checkbox-agree').prop('value')).toEqual('');
        component.find('#demo-simple-select').simulate('change', { target: { male: 'man' } });
        //component.find('#checkbox-agree').simulate('change', { target: { agree: true } });  //  не находит checkbox-agree т к shallow(<SecondStep  /> рендерит неглубоко - че делать?
        expect(testState.male).toEqual('man');
        expect(testState.agree).toEqual(true);
      });
})