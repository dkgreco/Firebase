module.exports = (store) => {
    const redux = require('redux');
    console.log('Starting Redux');

    let setDispatchTo = (actionGenerator) => {
        "use strict";
        return store.dispatch(actionGenerator);
    };

    let actionRepository = require('../src-redux/actionGenerators/actionGenerators.jsx'),
        {changeSearchFilter, showCompletedTasks, addTaskToList, markTaskCompleted,
            removeTaskFromList, fetchLocationInfo} = actionRepository;

    let setSearchFilterTo = searchFilter => setDispatchTo(changeSearchFilter(searchFilter)),
        viewCompletedTasks = boolVal => setDispatchTo(showCompletedTasks(boolVal)),
        addTask = task => setDispatchTo(addTaskToList(task)),
        completeTask = byTaskId => setDispatchTo(markTaskCompleted(byTaskId)),
        removeTask = byTaskId => setDispatchTo(removeTaskFromList(byTaskId)),
        fetchLocation = () => setDispatchTo(fetchLocationInfo());

    return {
        setSearchFilterTo,
        viewCompletedTasks,
        addTask,
        completeTask,
        removeTask,
        fetchLocation,
        store
    };
};