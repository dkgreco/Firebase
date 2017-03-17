const React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtilsLib = require('react-addons-test-utils');

let Todo = require('Todo');

describe('Todo', () => {
    "use strict";
    it('should exist', () => {
        expect(Todo).toExist();
    });

    it('should call onToggle fxn and pass id on click', () => {
        let task = {
                id: 119,
                action: 'Feed Mister',
                completed: true
            },
            spy = expect.createSpy(),
            todo = TestUtilsLib.renderIntoDocument(<Todo {...task} onToggle={spy}/>),
            expectedValue = task.id,
            $element = $(ReactDOM.findDOMNode(todo));

        TestUtilsLib.Simulate.click($element[0]);

        expect(spy).toHaveBeenCalledWith(expectedValue);

    });
});