const React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jquery'),
    TestUtilsLib = require('react-addons-test-utils'),
    actions = require('./../../src-redux/actionGenerators/actionGenerators');

let AddTodo = require('AddTodo');

describe('AddTodo', () => {
    "use strict";
   /*it('should call handleAddTask() if valid string entered', () => {
        let spy = expect.createSpy(),
            action = {
                id: 'junk',
                task: 'Wash Bailey',
                markCompleted: false,
                taskCreatedAt: 800000,
                taskCompletedAt: null
            }, //actions.startAddTask('Wash Bailey'),
            addTodo = TestUtilsLib.renderIntoDocument(<AddTodo {...action} handleFormSubmit={spy}/>),
            $element = $(ReactDOM.findDOMNode(addTodo));
        addTodo.refs.taskToAdd.value = 'Wash Bailey';
        TestUtilsLib.Simulate.submit($element.find('form')[0]);

        expect(spy).toHaveBeenCalled();
    });*/

    /*it('should not call handleAddTask() if 0 length string entered', () => {
        let spy = expect.createSpy(),
            addTodo = TestUtilsLib.renderIntoDocument(<AddTodo handleFormSubmit={spy}/>),
            $element = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.taskToAdd.value = '';
        TestUtilsLib.Simulate.submit($element.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });*/
});