const expect = require('expect');

let todoAPI = require('todoAPI');

describe('todoAPI', () => {
    "use strict";
    it('should exist', () => {
        expect(todoAPI).toExist();
    }) ;

    describe('setTaskList', () => {
        beforeEach(() => {
           localStorage.removeItem('taskList');
        });

        it('should set valid task array', () => {
            let expectedTaskList = [{
               id: 23,
               action: 'Feed Mister',
               completed: false
            }];

            todoAPI.setTasks(expectedTaskList);

            let actualTaskList = JSON.parse(localStorage.getItem('taskList'));

           expect(actualTaskList).toEqual(expectedTaskList);
        });

        it('should not set invalid task array', () => {
            let updateTaskList = "Set to string",
                expectedValue = null;

            todoAPI.setTasks(updateTaskList);

            let actualTaskList = JSON.parse(localStorage.getItem('taskList'));

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
            localStorage.setItem('taskList', JSON.stringify(expectedTaskList));

            let actualTaskList = todoAPI.getTasks();

            expect(actualTaskList).toEqual(expectedTaskList);
        });
    });

    describe('filterTasks', () => {
        beforeEach(() => {
            localStorage.removeItem('taskList');
        });
        let taskList = [{
            id: 147,
            action: 'Wash the dog',
            completed: true
        },{
            id: 148,
            action: 'Wash the Mister',
            completed: false
        },{
            id: 149,
            action: 'Wash the tiger',
            completed: true
        }];

        it('should return all items if showCompleted is true', () => {
            let filteredTasks = todoAPI.filterTasks(taskList, true, '');

            expect(filteredTasks.length).toBe(3);
        });

        it('should exclude all completed items from list if showCompleted is false', () => {
            let filteredTasks = todoAPI.filterTasks(taskList, false, '');

            expect(filteredTasks.length).toBe(1);
        });

        it('should filter by search filter provided from user', () => {
            let filteredTasks = todoAPI.filterTasks(taskList, false, 'Mister'.toLowerCase());

            expect(filteredTasks[0].action).toEqual('Wash the Mister');
        });

        it('should show all non-completed tasks if search filter is NOT provided by user', () => {
            let filteredTasks = todoAPI.filterTasks(taskList, false, '');

            expect(filteredTasks.length).toEqual(1);
        });

        it('should sort by completed status: non-completed to the top', () => {
            let filteredTasks = todoAPI.filterTasks(taskList, true, '');

            expect(filteredTasks[0].completed).toBe(false);
            expect(filteredTasks[0].id).toEqual(148);
        });

        it('should sort by completed status: completed to the bottom', () => {
            let filteredTasks = todoAPI.filterTasks(taskList, true, '');

            expect(filteredTasks[2].completed).toBe(true);
            expect(filteredTasks[2].id).toEqual(149);
        });
    });
});