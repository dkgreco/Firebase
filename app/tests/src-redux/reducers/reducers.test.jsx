const expect = require('expect'),
    df = require('deep-freeze-strict'),
    {   mapReducer, searchFilterReducer,
        showCompletedReducer, taskListReducer
    } = require('./../../../src-redux/reducers/reducers.jsx');

describe('Reducer Actions: taskList', () => {
    it('should fetch existing task list', () => {
        let action = {
                type: "READ",
            },
            res = taskListReducer(df([]), df(action));
            console.log(action);
            console.log(res);

    });
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
    it('should update an existing task', () => {
        let action = {
                type: "UPDATE",
                id: 'junk',
                task: {
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
        expect(res[0].markCompleted).toEqual(action.task.markCompleted);
        expect(res[0].taskCompletedAt).toEqual(action.task.taskCompletedAt);
    });
});