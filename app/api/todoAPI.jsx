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
    filterTasks: function(taskList, showCompleted, searchText) {
        "use strict";
        let filteredTaskList = taskList;

        return filteredTaskList
    }
};