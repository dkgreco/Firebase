import firebase, {firebaseReference, githubProvider, facebookProvider} from 'app/firebase/';
import Moment from 'moment';

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
        _login = (userName, id, provider) => {
            "use strict";
            return {
                type: 'LOGIN',
                id,
                userName,
                provider
            }
        },
        _logout = () => {
        "use strict";
            return {
                type: 'LOGOUT'
            }
        },
        _refetchUserCredentials = (id, userName) => {
            "use strict";
            return {
                type: 'RE-FETCH',
                id,
                userName
            }
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

    let clientLogin = loginMethod => {
            "use strict";
            console.log('Auth with: ', loginMethod);
            switch(loginMethod) {
                case 'GitHub':
                    return (dispatch, getState) => {
                        let successHandler = result => {
                                let {displayName, uid} = result.user;
                                let {provider} = result.credential;
                                dispatch(_login(displayName, uid, provider));
                            },
                            failureHandler = error => {
                                console.log('error: ', error);
                                dispatch(_logout());
                            };
                        return firebase.auth().signInWithPopup(githubProvider).then(successHandler, failureHandler);
                    };
                case 'Facebook':
                    return (dispatch, getState) => {
                        let successHandler = result => {
                                console.log(result);
                                let {displayName, uid} = result.user;
                                let {provider} = result.credential;
                                dispatch(_login(displayName, uid, provider));
                            },
                            failureHandler = error => {
                                console.log('error: ', error);
                                dispatch(_logout());
                            };
                        return firebase.auth().signInWithPopup(facebookProvider).then(successHandler, failureHandler);
                    };
            }
        },
        clientLogout = () => {
            "use strict";
            return (dispatch, getState) => {
                let successHandler = () => {
                        dispatch(_logout());
                    },
                    failureHandler = error => {
                        console.log('Sign-out Failed.', error);
                    };
                return firebase.auth().signOut().then(successHandler, failureHandler);
            }
        },
        fetchDataForView = (uid, userName) => {
            "use strict";
            let taskReference = firebaseReference.child(`Users/${uid}/taskList`);
            return (dispatch, getState) => {
                //Exit if we dont have a valid uid to proceed with a db update.
                if (uid === '') return dispatch(clientLogout());
                //Rebuild the Auth Object if it's been wiped from a refresh
                if (!getState().auth.id) dispatch(_login(userName, uid));
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
            return (dispatch, getState) => {
                const uid = getState().auth.id;
                console.log('uid for adding: ', uid);
                let task =   {
                    task: taskAction,
                    markCompleted: false,
                    taskCreatedAt: Moment().unix(),
                    taskCompletedAt: null
                };
                let taskReference = firebaseReference.child(`Users/${uid}/taskList`).push(task);
                return taskReference.then(() => {
                    dispatch(_addTaskToList({
                        ...task,
                        id: taskReference.key
                    }));
                }, e => console.log(e));
            };
        },
        setToggle = (id, boolVal) => {
            "use strict";
            return (dispatch, getState) => {
                const uid = getState().auth.id;
                let taskReference = firebaseReference.child(`Users/${uid}/taskList/${id}`),
                    updateValues = {
                        markCompleted: boolVal,
                        taskCompletedAt: boolVal ? Moment().unix() : null
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