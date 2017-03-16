const React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtilsLib = require('react-addons-test-utils');

let TodoList = require('TodoList'),
    Todo = require('Todo');

describe('TodoList', () => {
    "use strict";
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one Todo component for each todo item', () => {
        let todos = [
                {
                    id: 1,
                    action: 'Do something'
                },
                {
                    id: 2,
                    action: 'Do something else'
                }
            ],
            todolist = TestUtilsLib.renderIntoDocument(<TodoList displayList={todos}/>),
            todoComponents = TestUtilsLib.scryRenderedComponentsWithType(todolist, Todo),
            expectedTodoCount = todos.length,
            actualRenderedTodoComponents = todoComponents.length;

        expect(actualRenderedTodoComponents).toBe(expectedTodoCount);
    });
});