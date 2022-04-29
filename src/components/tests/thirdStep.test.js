import { shallow } from "enzyme";
import React from "react";
import ThirdStep from "../ThirdStep";


const setUp = () => shallow(<ThirdStep  />);

describe('ThirdStep component', () => {
    let component = setUp();

    test('should render ThirdStep component', () => {
        expect(component).toMatchSnapshot();
    });


    it('ThirdStep inputs', () => {
        const testState = { notification: 'day' };
        expect(component.find('#radio-group').prop('value')).toEqual(null);
        component.find('#radio-group').simulate('change', { target: { notification: 'day' } });
        expect(testState.notification).toEqual('day');
      });
})