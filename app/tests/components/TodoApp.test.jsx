const React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtilsLib = require('react-addons-test-utils');

let TodoApp = require('TodoApp');

describe('TodoApp', () => {
    "use strict";
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add the task to the task state on handleAddTask', () => {
        let expectedTask = 'Feed Mister',
        todoApp = TestUtilsLib.renderIntoDocument(<TodoApp/>);

        todoApp.setState({todos: []});
        todoApp.handleAddTask(expectedTask);

        expect(todoApp.state.todos[0].action).toBe(expectedTask);
    });
});