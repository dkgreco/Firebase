const React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtilsLib = require('react-addons-test-utils'),
    moment = require('moment');

let TodoApp = require('TodoApp');

describe('TodoApp', () => {
    "use strict";
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

 /*   it('should add the task to the task state on handleAddTask', () => {
        let task = 'Feed Mister',
            expectedTask = task,
            todoApp = TestUtilsLib.renderIntoDocument(<TodoApp/>);

        todoApp.setState({taskList: []});
        todoApp.handleAddTask(task);

        expect(todoApp.state.taskList[0].action).toBe(expectedTask);
        //Check Timestamp
        expect(todoApp.state.taskList[0].createdAt).toBeA('number');
    });

    it('should toggle the stored value from the completed prop of the task.', () => {
        let task = {
                id: 11,
                action: 'Feed Mister',
                completed: false,
                createdAt: 0,
                completedAt: undefined
            },
            todoApp = TestUtilsLib.renderIntoDocument(<TodoApp/>),
            expectedValue = true;

        todoApp.setState({taskList: [task]});

        //check that value is false
        expect(todoApp.state.taskList[0].completed).toBe(task.completed);
        //force a change
        todoApp.handleToggle(11);
        //verify change
        expect(todoApp.state.taskList[0].completed).toBe(expectedValue);
        expect(todoApp.state.taskList[0].completedAt).toBeA('number');
    });

    it('should retoggle the stored value from the completed prop of the task.', () => {
        let task = {
                id: 300,
                action: 'Feed Mister',
                markCompleted: true,
                taskCreatedAt: 0,
                taskCompletedAt: undefined
            },
            todoApp = TestUtilsLib.renderIntoDocument(<TodoApp/>),
            expectedValue = false;

        todoApp.setState({taskList: [task]});

        //check that value is false
        expect(todoApp.state.taskList[0].markCompleted).toBe(task.markCompleted);
        //force a change
        todoApp.handleToggle(300);
        //verify change
        expect(todoApp.state.taskList[0].completed).toBe(expectedValue);
        expect(todoApp.state.taskList[0].taskCompletedAt).toNotExist();
    });*/
});