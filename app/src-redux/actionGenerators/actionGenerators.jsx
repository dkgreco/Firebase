const moment = require('moment'),
    uuid = require('node-uuid');
import firebase, {firebaseReference} from 'app/firebase/';

module.exports = (() => {
    let _startLocationSearch = () => {
            "use strict";
            return {
                type: 'START_LOCATION_SEARCH'
            }
        },
        _buildTaskView = parsedTaskList => {
            "use strict";
            return {
                type: 'READ',
                displayList: parsedTaskList
            }
        },
        _completeLocationSearch = url => {
            "use strict";
            return {
                type: 'STOP_LOCATION_SEARCH',
                url: url
            }
        },
        _addTaskToList = task => {
            "use strict";
            return {
                type: 'CREATE',
                task
            }
        },
        _updateTaskInformation = (id, updateValues) => {
            "use strict";
            return {
                type: 'UPDATE',
                id,
                updateValues
            }
        };

    let setTask = taskAction => {
            "use strict";
            return (dispatch, getState) => {
                let task =   {
                    task: taskAction,
                    markCompleted: false,
                    taskCreatedAt: moment().unix(),
                    taskCompletedAt: null
                };
                let taskReference = firebaseReference.child('taskList').push(task);
                return taskReference.then(() => {
                    dispatch(_addTaskToList({
                        ...task,
                        id: taskReference.key
                    }));
                })
            };
        },
        getListFromDB = () => {
        "use strict";
            let taskReference = firebaseReference.child('taskList');
            return dispatch => {
                taskReference.once('value').then(snapshot => {
                    let taskListObject = snapshot.val() || {},
                        parsedTasks = [];

                    Object.keys(taskListObject).forEach(taskId => {
                        parsedTasks.push({
                            id: taskId,
                            ...taskListObject[taskId]
                        })
                    });
                    dispatch(_buildTaskView(parsedTasks));
                });
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

                    let passbackUrl = `${baseUrl}${location}`;

                    dispatch(_completeLocationSearch(passbackUrl));
                });
            };
        },
        setToggle = (id, boolVal) => {
            "use strict";
            return (dispatch, getState) => {
                let taskReference = firebaseReference.child(`taskList/${id}`),
                    updateValues = {
                        markCompleted: boolVal,
                        taskCompletedAt: boolVal ? moment().unix() : null
                    };
                return taskReference.update(updateValues).then(() => {
                    dispatch(_updateTaskInformation(id, updateValues));
                }, e => {
                    console.error('Update Failed: ', e);
                });
            }
        },
        removeTaskFromList = taskId => {
            "use strict";
            return {
                type: 'DELETE',
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
        getListFromDB,
        setTask,
        changeSearchFilter,
        fetchLocationInfo,
        setToggle,
        removeTaskFromList,
        showCompletedTasks
    };
})();