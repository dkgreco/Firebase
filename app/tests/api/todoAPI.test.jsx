const expect = require('expect');

let todoAPI = require('todoAPI');

describe('todoAPI', () => {
    "use strict";
    it('should exist', () => {
        expect(todoAPI).toExist();
    }) ;

    describe('setTaskList', () => {
        beforeEach(() => {
           localStorage.removeItem('displayList');
        });

        it('should set valid task array', () => {
            let expectedTaskList = [{
               id: 23,
               task: 'Feed Mister',
               markCompleted: false
            }];

            todoAPI.setTasks(expectedTaskList);

            let actualTaskList = JSON.parse(localStorage.getItem('displayList'));

           expect(actualTaskList).toEqual(expectedTaskList);
        });

        it('should not return value if displayList DNE', () => {
            let updateTaskList = "Set to string";

            todoAPI.setTasks(updateTaskList);

            let actualTaskList = JSON.parse(localStorage.getItem('displayList'));
            expect(actualTaskList).toNotExist();
        });
    });

    describe('getTaskList', () => {
        it('should return empty array for corrupted localstorage data', () => {
            let actualTaskList = todoAPI.getTasks();
            expect(actualTaskList).toEqual([]);
        });

        it('should return displayList if valid array exists in storage', () => {
            let expectedTaskList = [{
                id: 23,
                task: 'Feed Mister',
                markCompleted: false
            }];
            localStorage.setItem('displayList', JSON.stringify(expectedTaskList));

            let actualTaskList = todoAPI.getTasks();

            expect(actualTaskList).toEqual(expectedTaskList);
        });
    });

    describe('filterTasks', () => {
        beforeEach(() => {
            localStorage.removeItem('displayList');
        });
        let displayList = [{
            id: 147,
            task: 'Wash the dog',
            markCompleted: true
        },{
            id: 148,
            task: 'Wash the Mister',
            markCompleted: false
        },{
            id: 149,
            task: 'Wash the tiger',
            markCompleted: true
        }];

        it('should return all items if showCompleted is true', () => {
            let filteredTasks = todoAPI.filterTasks(displayList, true, '');

            expect(filteredTasks.length).toBe(3);
        });

        it('should exclude all completed items from list if showCompleted is false', () => {
            let filteredTasks = todoAPI.filterTasks(displayList, false, '');

            expect(filteredTasks.length).toBe(1);
        });

        it('should filter by search filter provided from user', () => {
            let filteredTasks = todoAPI.filterTasks(displayList, false, 'Mister');
            expect(filteredTasks[0].task).toEqual('Wash the Mister');
        });

        it('should show all non-completed tasks if search filter is NOT provided by user', () => {
            let filteredTasks = todoAPI.filterTasks(displayList, false, '');

            expect(filteredTasks.length).toEqual(1);
        });

        it('should sort by completed status: non-completed to the top', () => {
            let filteredTasks = todoAPI.filterTasks(displayList, true, '');

            expect(filteredTasks[0].markCompleted).toBe(false);
            expect(filteredTasks[0].id).toEqual(148);
        });

        it('should sort by completed status: completed to the bottom', () => {
            let filteredTasks = todoAPI.filterTasks(displayList, true, '');

            expect(filteredTasks[2].markCompleted).toBe(true);
            expect(filteredTasks[2].id).toEqual(149);
        });
    });
});