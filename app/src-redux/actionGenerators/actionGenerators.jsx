import firebase, {firebaseReference, githubProvider} from 'app/firebase/';
import * as moment from 'moment';

module.exports = (() => {
    let _addTaskToList = task => {
            "use strict";
            return {
                type: 'CREATE',
                task
            }
        },
        _initializeProgramWithDBData = displayList => {
            "use strict";
            return {
                type: 'READ',
                displayList
            }
        },
        _changeSearchFilterTo = searchFilter => {
            "use strict";
            return {
                type: 'SET_FILTER',
                searchFilter
            }
        },
        _completeLocationSearch = url => {
            "use strict";
            return {
                type: 'STOP_LOCATION_SEARCH',
                url
            }
        },
        _deleteTask = id => {
            "use strict";
            return {
                type: 'DELETE',
                id
            }
        },
        _exposeCompletedTasks = showCompleted => {
        "use strict";
            return {
                type: 'SHOW_COMPLETED',
                showCompleted
            }
        },
        _login = () => {
            "use strict";

        },
        _logout = () => {
        "use strict";

        },
        _startLocationSearch = () => {
            "use strict";
            return {
                type: 'START_LOCATION_SEARCH'
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

    let clientLogin = () => {
            "use strict";
            return (dispatch, getState) => {
                let successHandler = result => {
                        console.log('Auth worked.', result);
                    },
                    failureHandler = error => {
                        console.log('Auth failed.', error);
                    };
                return firebase.auth().signInWithPopup(githubProvider).then(successHandler, failureHandler);
            }
        },
        clientLogout = () => {
            "use strict";
            return (dispatch, getState) => {
                let successHandler = result => {
                        console.log('Sign-out successful.', result);
                    },
                    failureHandler = error => {
                        console.log('Sign-out Failed.', error);
                    };
                return firebase.auth().signOut().then(successHandler, failureHandler);
            }
        },
        fetchDataForView = () => {
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
                    dispatch(_initializeProgramWithDBData(parsedTasks));
                });
            }
        },
        fetchLocationInfo = () => {
            return dispatch => {
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
        setSearchFilter = searchFilter => {
            "use strict";
            return dispatch => {
                dispatch(_changeSearchFilterTo(searchFilter));
            };
        },
        setTask = taskAction => {
            "use strict";
            console.log('inside setTask');
            console.log(taskAction);
            return (dispatch, getState) => {
                let task =   {
                    task: taskAction,
                    markCompleted: false,
                    taskCreatedAt: moment().unix(),
                    taskCompletedAt: null
                };
                console.log(task);
                let taskReference = firebaseReference.child('taskList').push(task);
                console.log(taskReference);
                return taskReference.then(() => {
                    dispatch(_addTaskToList({
                        ...task,
                        id: taskReference.key
                    }));
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
        showCompletedTasks = boolVal => {
            "use strict";
            return dispatch => {
                dispatch(_exposeCompletedTasks(boolVal));
            };
        },
        unsetTask = taskId => {
            "use strict";
            return dispatch => {
                dispatch(_deleteTask(taskId));
            };
        };

    return {
        clientLogin,
        clientLogout,
        fetchDataForView,
        fetchLocationInfo,
        setSearchFilter,
        setTask,
        setToggle,
        showCompletedTasks,
        unsetTask
    };
})();