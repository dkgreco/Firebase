module.exports = (() => {
    let authReducer = (state, action) => {
            "use strict";
            let defaultState = {};
            state = state || defaultState;
            switch(action.type) {
                case 'LOGIN':
                    return {
                        id: action.id,
                        userName: action.userName
                    };
                case 'LOGOUT':
                    return state;
                default:
                    return state;
            }
        },
        mapReducer = (state, action) => {
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
        },
        searchFilterReducer = (state, action) => {
            "use strict";
            state = state || '';
            switch(action.type) {
                case 'SET_FILTER':
                    return action.searchFilter;
                default:
                    return state;
            }
        },
        showCompletedReducer = (state, action) => {
            "use strict";
            state = state || false;
            switch(action.type) {
                case 'SHOW_COMPLETED':
                    return action.showCompleted;
                default:
                    return state;
            }
        },
        taskListReducer = (state, action) => {
            "use strict";
            state = state || [];
            switch(action.type) {
                case 'CREATE':
                    return [
                        ...state,
                        action.task
                    ];
                case 'READ':
                    return action.displayList;
                case 'UPDATE':
                    return state.map(task => {
                        if (task.id === action.id) {
                            return {
                                ...task,
                                ...action.updateValues
                            }
                        } else {
                            return task;
                        }
                    });
                case 'DELETE':
                    return state.filter(task => task.id !== action.id);
                default:
                    return state;
            }
        };
        return {
            authReducer,
            mapReducer,
            searchFilterReducer,
            showCompletedReducer,
            taskListReducer,
        }
})();