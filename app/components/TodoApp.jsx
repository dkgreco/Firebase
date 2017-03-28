const React = require('react'),
    AddTodo = require('AddTodo'),
    TodoList = require('TodoList'),
    TodoSearch = require('TodoSearch');

export let TodoApp;
TodoApp = React.createClass({
    render: function() {
        "use strict";
        return (
            <div>
                <h1 className="page-title">Task App</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch/>
                            <TodoList/>
                            <AddTodo/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export default TodoApp;