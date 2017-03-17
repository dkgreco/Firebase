const React = require('react'),
    TodoSearch = require('TodoSearch'),
    TodoList = require('TodoList'),
    AddTodo = require('AddTodo');

let TodoApp;
TodoApp = React.createClass({
    getInitialState: function() {
        "use strict";
        return {
            showCompleted: false,
            searchFilter: '',
            todos: [
                {
                    id: 1,
                    action: 'walk the dog'
                },
                {
                    id: 2,
                    action: 'get groceries'
                },
                {
                    id: 3,
                    action: 'make dinner'
                }
            ]
        }
    },
    handleAddTask: function(taskToAdd) {
        "use strict";
        alert('new task: ' + taskToAdd);
    },
    handleSearch: function(showCompleted, searchFilter) {
        "use strict";
        this.setState({
            showCompleted: showCompleted,
            searchFilter: searchFilter.toLowerCase()
        });
    },
    render: function() {
        "use strict";
        let {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList displayList={todos}/>
                <AddTodo onAddTask={this.handleAddTask}/>
            </div>
        )
    }
});

module.exports = TodoApp;