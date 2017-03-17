const React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtilsLib = require('react-addons-test-utils');

let TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
    "use strict";
    it('should exist', () => {
        expect(TodoSearch).toExist();
    });

    it('should call onSearch with enetered input text', () => {
        let spy = expect.createSpy(),
            todoSearch = TestUtilsLib.renderIntoDocument(<TodoSearch onSearch={spy}/>),
            expectedValue = 'Wash';

        todoSearch.refs.searchFilter.value = expectedValue;
        TestUtilsLib.Simulate.change(todoSearch.refs.searchFilter);
        expect(spy).toHaveBeenCalledWith(false, expectedValue);
    });

    it('should call onSearch with the proper checked value', () => {
        let spy = expect.createSpy(),
            todoSearch = TestUtilsLib.renderIntoDocument(<TodoSearch onSearch={spy}/>),
            expectedValue = true;

        todoSearch.refs.showCompleted.checked = expectedValue;
        TestUtilsLib.Simulate.change(todoSearch.refs.showCompleted);
        expect(spy).toHaveBeenCalledWith(expectedValue, '');
    });
});