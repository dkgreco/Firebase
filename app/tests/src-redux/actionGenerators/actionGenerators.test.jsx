const expect = require('expect'),
    df = require('deep-freeze-strict'),
    {   setTask,
        buildTaskListFromLocalStorage,
        changeSearchFilter,
        fetchLocationInfo,
        setToggle,
        removeTaskFromList,
        showCompletedTasks
    } = require('./../../../src-redux/actionGenerators/actionGenerators');