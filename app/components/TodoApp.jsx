const React = require('react'),
    TodoList = require('TodoList'),
    AddTodo = require('AddTodo');

let TodoApp;
TodoApp = React.createClass({
    getInitialState: function() {
        "use strict";
        return {
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
    render: function() {
        "use strict";
        let {todos} = this.state;
        return (
            <div>
                <TodoList displayList={todos}/>
                <AddTodo handleAddTask={this.handleAddTask}/>
            </div>
        )
    }
});

module.exports = TodoApp;