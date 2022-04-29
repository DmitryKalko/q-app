import { shallow } from "enzyme";
import React from "react";
import SecondStepDescription from "../SecondStepDescription";

describe('about work SecondStepDescription component', () => {
    it('should render SecondStepDescription component', () => {
        const component = shallow(<SecondStepDescription/>)
        expect(component).toMatchSnapshot();
    });
});