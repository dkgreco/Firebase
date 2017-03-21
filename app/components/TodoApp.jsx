const React = require('react'),
    AddTodo = require('AddTodo'),
    moment = require('moment'),
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
            taskList: todoAPI.getTasks(),
            createdAt: undefined,
            completedAt: undefined,
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
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ]
        });
    },
    handleSearch: function(showCompleted, searchFilter) {
        "use strict";
        let lowerCaseFilter = searchFilter.toLowerCase();
        this.setState({
            showCompleted: showCompleted,
            searchFilter: lowerCaseFilter
        });
    },
    handleToggle: function(id) {
        "use strict";
        let updatedTasks = this.state.taskList.map(task => {
            if (task.id === id) {
                task.completed = !task.completed;
                task.completed ? (task.completedAt = moment().unix()) : undefined;
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
                <h1 className="page-title">Task App</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch onSearch={this.handleSearch}/>
                            <TodoList displayList={filteredTaskList} onToggle={this.handleToggle}/>
                            <AddTodo onAddTask={this.handleAddTask}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = TodoApp;