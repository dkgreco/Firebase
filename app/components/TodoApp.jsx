const React = require('react'),
    AddTodo = require('AddTodo'),
    todoAPI = require('todoAPI'),
    TodoList = require('TodoList'),
    TodoSearch = require('TodoSearch'),
    uuid = require('node-uuid');

let TodoApp;
TodoApp = React.createClass({
    getInitialState: function() {
        "use strict";
        return {
            showCompleted: false,
            searchFilter: '',
            taskList: todoAPI.getTasks()
        }
    },
    componentDidUpdate: function() {
        "use strict";
        todoAPI.setTasks(this.state.taskList);
    },
    handleAddTask: function(taskToAdd) {
        "use strict";
        this.setState({
            taskList: [
                ...this.state.taskList,
                {
                    id: uuid(),
                    action: taskToAdd,
                    completed: false
                }
            ]
        });
    },
    handleSearch: function(showCompleted, searchFilter) {
        "use strict";
        this.setState({
            showCompleted: showCompleted,
            searchFilter: searchFilter.toLowerCase()
        });
    },
    handleToggle: function(id) {
        "use strict";
        let updatedTasks = this.state.taskList.map(task => {
            if (task.id === id) {
                task.completed = !task.completed;
            }

            return task;
        });

        return this.setState({taskList: updatedTasks});
    },
    render: function() {
        "use strict";
        let {taskList, showCompleted, searchFilter} = this.state,
            filteredTaskList = todoAPI.filterTasks(taskList, showCompleted, searchFilter);
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList displayList={filteredTaskList} onToggle={this.handleToggle}/>
                <AddTodo onAddTask={this.handleAddTask}/>
            </div>
        )
    }
});

module.exports = TodoApp;