const expect = require('expect'),
    todoAPI = require('todoAPI');

describe('todoAPI', () => {
    "use strict";
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