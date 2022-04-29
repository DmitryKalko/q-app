import { shallow } from "enzyme";
import React from "react";
import ThirdStepDescription from "../ThirdStepDescription";

describe('about work FirstStepDescription component', () => {
    it('should render FirstStepDescription component', () => {
        const component = shallow(<ThirdStepDescription/>)
        expect(component).toMatchSnapshot();
    });
});