const React = require('react'),
    TodoSearch = require('TodoSearch'),
    TodoList = require('TodoList'),
    AddTodo = require('AddTodo'),
    uuid = require('node-uuid');

let TodoApp;
TodoApp = React.createClass({
    getInitialState: function() {
        "use strict";
        return {
            showCompleted: false,
            searchFilter: '',
            todos: [
                {
                    id: uuid(),
                    action: 'walk the dog',
                    completed: false
                },
                {
                    id: uuid(),
                    action: 'get groceries',
                    completed: true
                },
                {
                    id: uuid(),
                    action: 'make dinner',
                    completed: false
                }
            ]
        }
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