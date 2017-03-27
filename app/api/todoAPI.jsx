const $ = require('jQuery');
module.exports = {
    setTasks: function(taskList) {
        "use strict";
        console.log('setting tasklist to: ', taskList);
        if($.isArray(taskList)) {
            localStorage.setItem('displayList', JSON.stringify(taskList));
            return taskList;
        }
    },
    getTasks: function() {
        "use strict";
        //Fetch items off local storage
        let stringList = localStorage.getItem('displayList');
        console.log('stringlist from getTasks(): ', stringList);
        let list = [];

        try {
            list = stringList ? JSON.parse(stringList) : list;
        } catch(e) {
            console.error('Error Caught:\n', e);
        }

        return $.isArray(list) ? list : [];
    },
    filterTasks: function(taskList, showCompleted, searchFilter) {
        "use strict";
        let filteredTaskList = taskList;

        //filter by showCompleted
        filteredTaskList = filteredTaskList.filter(task => !task.markCompleted || showCompleted);

        //filter by searchFilter
        filteredTaskList = filteredTaskList.filter(task => {
            searchFilter = searchFilter.toLowerCase();
            let text = task.task.toLowerCase();
            return searchFilter.length === 0 || text.indexOf(searchFilter) > -1;
        });

        //sort task by non-completed first
        filteredTaskList.sort((a, b) => {
            if(!a.markCompleted && b.markCompleted) {
                return -1;
            } else if (a.markCompleted && !b.markCompleted) {
                return 1;
            } else {
                return 0;
            }
        });

        return filteredTaskList;
    }
};