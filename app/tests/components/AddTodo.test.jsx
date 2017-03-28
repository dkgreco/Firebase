const React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtilsLib = require('react-addons-test-utils');

let AddTodo = require('AddTodo');

describe('AddTodo', () => {
    "use strict";
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

/*    it('should call handleAddTask() if valid string entered', () => {
        let spy = expect.createSpy(),
            task = {
                id: 234,
                markCompleted: false,
                task: 'Feed Kitty',
                taskCreatedAt: 540000,
                taskCompletedAt: undefined
            },
            addTodo = TestUtilsLib.renderIntoDocument(<AddTodo {...task} handleFormSubmit={spy}/>),
            $element = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.taskToAdd.value = 'Save my progress';
        TestUtilsLib.Simulate.submit($element.find('form')[0]);
        console.log('the spy: ', spy);

        expect(spy).toHaveBeenCalledWith(task);
    });

    it('should not call handleAddTask() if 0 length string entered', () => {
        let spy = expect.createSpy(),
            addTodo = TestUtilsLib.renderIntoDocument(<AddTodo onAddTask={spy}/>),
            $element = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.taskToAdd.value = '';
        TestUtilsLib.Simulate.submit($element.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });*/
});