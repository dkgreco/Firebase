const React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jquery'),
    TestUtilsLib = require('react-addons-test-utils'),
    moment = require('moment');

let Todo = require('Todo');

describe('Todo', () => {
    "use strict";

/*    it('should dispatch markCompleted action on click', () => {
        let task = {
                id: 119,
                task: 'Feed Mister',
                markCompleted: true,
                taskCreatedAt: moment().unix(),
                taskCompletedAt: moment().unix()
            },
            spy = expect.createSpy(),
            todo = TestUtilsLib.renderIntoDocument(<Todo {...task} onToggle={spy}/>),
            expectedValue = {
                type: '',
                id: task.id
            },
            $element = $(ReactDOM.findDOMNode(todo));

        TestUtilsLib.Simulate.click($element[0]);

        expect(spy).toHaveBeenCalledWith(expectedValue);
    });*/
});