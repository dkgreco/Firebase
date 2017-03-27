const moment = require('moment');
module.exports = (() => {
    let searchFilterReducer = (state, action) => {
        "use strict";
        state = state || '';
        switch(action.type) {
            case 'SET_FILTER':
                return action.searchFilter;
            default:
                return state;
        }
    };

    let showCompletedReducer = (state, action) => {
        "use strict";
        state = state || false;
        switch(action.type) {
            case 'SHOW_COMPLETED':
                return action.showCompleted;
            default:
                return state;
        }
    };

    let taskListReducer = (state, action) => {
        "use strict";
        state = state || [];
        switch(action.type) {
            case 'ADD_TASK':
                return [
                    ...state,
                    {
                        id: action.id,
                        task: action.task,
                        markCompleted: action.markCompleted,
                        taskCreatedAt: action.taskCreatedAt,
                        taskCompletedAt: action.taskCompletedAt
                    }
                ];
            case 'COMPLETE_TASK':
                return state.map(task => {
                    if (task.id === action.id) {
                        return {
                            ...task,
                            markCompleted: action.markCompleted,
                            taskCompletedAt: action.taskCompletedAt
                        }
                    } else {
                        return task;
                    }
                });
            case 'DEL_TASK':
                return state.filter(task => task.id !== action.id);
            default:
                return state;
        }
    };

    let mapReducer = (state, action) => {
        "use strict";
        let defaultState = {
            isFetching: false,
            url: undefined
        };
        state = state || defaultState;
        switch(action.type) {
            case 'START_LOCATION_SEARCH':
                return {
                    isFetching: true,
                    url: undefined
                };
            case 'STOP_LOCATION_SEARCH':
                return {
                    isFetching: false,
                    url: action.url
                };
            default:
                return state;
        }
    };

    return {
        searchFilterReducer,
        showCompletedReducer,
        taskListReducer,
        mapReducer
    }
})();