const expect = require('expect'),
    df = require('deep-freeze-strict'),
    {   mapReducer, searchFilterReducer,
        showCompletedReducer, taskListReducer
    } = require('./../../../src-redux/reducers/reducers.jsx');

describe('Reducer Actions: taskList', () => {
    it('should create new task', () => {
        //CREATE TASK
        let action = {
            type: "CREATE",
            task: {
                id: 'junk',
                task: 'Go to Brunch',
                markCompleted: false,
                taskCreatedAt: 4000000,
                taskCompletedAt: null
            }
        },
            res = taskListReducer(df([]), df(action));
        expect(res.length).toBe(1);
        expect(res[0]).toEqual(action.task);
    });
    it('should read and render data as if from db', () => {
        let action = {
                type: "READ",
                displayList: [{
                    id: 'junk',
                    task: 'Go to Brunch',
                    markCompleted: false,
                    taskCreatedAt: 4000000,
                    taskCompletedAt: null
                }]
            },
            res = taskListReducer(df([]), df(action));
        expect(res.length).toBe(1);
        expect(res[0]).toEqual(action.displayList[0]);
    });
    it('should update an existing task', () => {
        let action = {
                type: "UPDATE",
                id: 'junk',
                updateValues: {
                    markCompleted: true,
                    taskCompletedAt: 500000
                },
            },
            res = taskListReducer(df([{
                id: 'junk',
                task: 'Go to Brunch',
                markCompleted: false,
                taskCreatedAt: 4000000,
                taskCompletedAt: null
            }]), df(action));

        expect(res.length).toBe(1);
        expect(res[0].markCompleted).toEqual(action.updateValues.markCompleted);
        expect(res[0].taskCompletedAt).toEqual(action.updateValues.taskCompletedAt);
    });
    it('TODO - Test to remove an exist task from list', () => console.log('please integrate me...free pass for now'));
});