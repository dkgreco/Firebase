const moment = require('moment'),
    uuid = require('node-uuid');
module.exports = (() => {
    let _startLocationSearch = () => {
            "use strict";
            return {
                type: 'START_LOCATION_SEARCH'
            }
        },
        _completeLocationSearch = url => {
            "use strict";
            return {
                type: 'STOP_LOCATION_SEARCH',
                url: url
            }
        };

    let addTaskToList = task => {
            "use strict";
            return {
                type: 'ADD_TASK',
                id: uuid(),
                task: task,
                taskCreatedAt: moment().unix(),
                markCompleted: false,
                taskCompletedAt: undefined
            }
        },
        buildTaskListFromLocalStorage = taskList => {
            "use strict";
            return {
                type: 'BUILD_FROM_LOCAL_STORAGE',
                displayList: taskList
            }
        },
        changeSearchFilter = searchFilter => {
            "use strict";
            return {
                type: 'SET_FILTER',
                searchFilter: searchFilter
            }
        },
        fetchLocationInfo = () => {
            return (dispatch) => {
                //, getState
                "use strict";
                const axios = require('axios');
                dispatch(_startLocationSearch());

                axios.get('http://ipinfo.io').then(res => {
                    "use strict";
                    let location = res.data.loc;
                    let baseUrl = 'http://maps.google.com/?q=';

                    let passbackUrl = baseUrl + location;

                    dispatch(_completeLocationSearch(passbackUrl));
                });
            };
        },
        markTaskCompleted = (id, boolVal) => {
            "use strict";
            let timeValue = boolVal ? moment().unix() : undefined;
            return {
                type: 'COMPLETE_TASK',
                id: id,
                markCompleted: boolVal,
                taskCompletedAt: timeValue
            }
        },
        removeTaskFromList = taskId => {
            "use strict";
            return {
                type: 'DEL_TASK',
                id: taskId
            }
        },
        showCompletedTasks = setToState => {
            "use strict";
            return {
                type: 'SHOW_COMPLETED',
                showCompleted: setToState
            }
        };

    return {
        addTaskToList,
        buildTaskListFromLocalStorage,
        changeSearchFilter,
        fetchLocationInfo,
        markTaskCompleted,
        removeTaskFromList,
        showCompletedTasks
    };
})();