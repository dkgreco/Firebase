const moment = require('moment'),
    uuid = require('node-uuid');
module.exports = (() => {
    let changeSearchFilter = searchFilter => {
        "use strict";
        return {
            type: 'SET_FILTER',
            searchFilter: searchFilter
        }
    };

    let showCompletedTasks = setToState => {
        "use strict";
        return {
            type: 'SHOW_COMPLETED',
            showCompleted: setToState
        }
    };

    let markTaskCompleted = (id, boolVal) => {
        "use strict";
        let timeValue = boolVal ? moment().unix() : undefined;
        return {
            type: 'COMPLETE_TASK',
            id: id,
            markCompleted: boolVal,
            taskCompletedAt: timeValue
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
    };

    let removeTaskFromList = taskId => {
        "use strict";
        return {
            type: 'DEL_TASK',
            id: taskId
        }
    };

    let startLocationSearch = () => {
        "use strict";
        return {
            type: 'START_LOCATION_SEARCH'
        }
    };
    let completeLocationSearch = url => {
        "use strict";
        return {
            type: 'STOP_LOCATION_SEARCH',
            url: url
        }
    };
    let fetchLocationInfo = () => {
        return (dispatch, getState) => {
            "use strict";
            const axios = require('axios');
            dispatch(startLocationSearch());

            axios.get('http://ipinfo.io').then(res => {
                "use strict";
                let location = res.data.loc;
                let baseUrl = 'http://maps.google.com/?q=';

                let passbackUrl = baseUrl + location;

                dispatch(completeLocationSearch(passbackUrl));
            });
        };
    };

    return {
        changeSearchFilter,
        showCompletedTasks,
        addTaskToList,
        removeTaskFromList,
        markTaskCompleted,
        fetchLocationInfo
    };
})();