module.exports = {
    filterTasks: function(taskList, showCompleted, searchFilter) {
        "use strict";
        let filteredTaskList = taskList;
        //filter by showCompleted
        filteredTaskList = filteredTaskList.filter(task => !task.markCompleted || showCompleted);

        //filter by searchFilter
        if (searchFilter !== '') {
            filteredTaskList = filteredTaskList.filter(task => {
                searchFilter = searchFilter.toLowerCase();
                let text = task.task.toLowerCase();
                return searchFilter.length === 0 || text.indexOf(searchFilter) > -1;
            });
        }

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