const expect = require('expect');

let todoAPI = require('todoAPI');

describe('todoAPI', () => {
    "use strict";
    it('should exist', () => {
        expect(todoAPI).toExist();
    }) ;

    describe('setTaskList', () => {
        beforeEach(() => {
           localStorage.removeItem('todos');
        });

        it('should set valid task array', () => {
            let expectedTaskList = [{
               id: 23,
               action: 'Feed Mister',
               completed: false
            }];

            todoAPI.setTasks(expectedTaskList);

            let actualTaskList = JSON.parse(localStorage.getItem('todos'));

           expect(actualTaskList).toEqual(expectedTaskList);
        });

        it('should not set invalid task array', () => {
            let updateTaskList = "Set to string",
                expectedValue = null;

            todoAPI.setTasks(updateTaskList);

            let actualTaskList = JSON.parse(localStorage.getItem('todos'));

            expect(actualTaskList).toBe(expectedValue);
        });
    });

    describe('getTaskList', () => {
        it('should return empty array for corrupted localstorage data', () => {
            let actualTaskList = todoAPI.getTasks();
            expect(actualTaskList).toEqual([]);
        });

        it('should return tasklist if valid array exists in storage', () => {
            let expectedTaskList = [{
                id: 23,
                action: 'Feed Mister',
                completed: false
            }];
            localStorage.setItem('todos', JSON.stringify(expectedTaskList));

            let actualTaskList = todoAPI.getTasks();

            expect(actualTaskList).toEqual(expectedTaskList);
        });
    });
});