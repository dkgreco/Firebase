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
            todos: todoAPI.getTasks()
        }
    },
    componentDidUpdate: function() {
        "use strict";
        todoAPI.setTasks(this.state.todos);
    },
    handleAddTask: function(taskToAdd) {
        "use strict";
        this.setState({
            todos: [
                ...this.state.todos,
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
        let updatedTasks = this.state.todos.map(task => {
            if (task.id === id) {
                task.completed = !task.completed;
            }

            return task;
        });

        return this.setState({todos: updatedTasks});
    },
    render: function() {
        "use strict";
        let {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList displayList={todos} onToggle={this.handleToggle}/>
                <AddTodo onAddTask={this.handleAddTask}/>
            </div>
        )
    }
});

module.exports = TodoApp;