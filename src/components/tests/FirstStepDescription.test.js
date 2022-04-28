import { shallow } from "enzyme";
import React from "react";
import FirstStepDescription from "../FirstStepDescription";

describe('about work FirstStepDescription component', () => {
    it('should render FirstStepDescription component', () => {
        const component = shallow(<FirstStepDescription/>)
        expect(component).toMatchSnapshot();
    });
});

// Snapshot(снимок) - просто текстовое представление данных
// мы просим Jest сохранить снимок нашей структуры данных на диск, а при последующих выполнениях теста сравнивать новые снимки с ранее сохраненным и если они не совпадают то тест падает
// тестируя снапшотами разметку ты можешь проверять правильность логики
// например пропсы, ты получил пропс и хочешь что-то отрендорить(соответственно у тебя есть снимок как это должно выглядеть)
// кто-то что-то поменял и пропсы не приходят - соответственно ошибка в тесте, как как разметка выглядит уже подругому
// часто создается два кейса - проверка на наличии и отсутствие пропсов


