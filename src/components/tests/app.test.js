import { shallow } from "enzyme";
import React from "react";
import App from "../App";

it('should render App component', () => {
    const component = shallow(<App />);  // осуществляет неглубокую отрисовку - только первый уровень
    const wrapper = component.find('.main');  // находим класс main
    expect(wrapper.length).toBe(1); // проверям что он встречается только один раз в нашем компоненте
}) 