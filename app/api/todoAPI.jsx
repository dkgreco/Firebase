const $ = require('jQuery');
module.exports = {
    setTasks: function(taskList) {
        "use strict";
        if($.isArray(taskList)) {
            localStorage.setItem('taskList', JSON.stringify(taskList));
            return taskList;
        }
    },
    getTasks: function() {
        "use strict";
        //Fetch items off local storage
        let stringList = localStorage.getItem('taskList');
        let list = [];

        try {
            list = JSON.parse(stringList);
        } catch(e) {
            console.error('Error Caught:\n', e);
        }

        return $.isArray(list) ? list : [];
    },
    filterTasks: function(taskList, showCompleted, searchFilter) {
        "use strict";
        let filteredTaskList = taskList;

        //filter by showCompleted
        filteredTaskList = filteredTaskList.filter(task => !task.completed || showCompleted);

        //filter by searchFilter
        filteredTaskList = filteredTaskList.filter(task => {
            let text = task.action.toLowerCase();
            return searchFilter.length === 0 || text.indexOf(searchFilter) > -1;
        });

        //sort task by non-completed first
        filteredTaskList.sort((a, b) => {
            if(!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        });

        return filteredTaskList;
    }
};