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

    it('should toggle the stored value from the completed prop of the task.', () => {
        let task = {
                id: 11,
                action: 'Feed Mister',
                completed: false
            },
            todoApp = TestUtilsLib.renderIntoDocument(<TodoApp/>),
            expectedValue = true;

        todoApp.setState({todos: [task]});

        //check that value is false
        expect(todoApp.state.todos[0].completed).toBe(task.completed);
        //force a change
        todoApp.handleToggle(11);
        //verify change
        expect(todoApp.state.todos[0].completed).toBe(expectedValue);


    });
});