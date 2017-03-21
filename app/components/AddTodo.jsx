const React = require('react');

let AddTodo;
AddTodo = React.createClass({
    handleFormSubmit: function(e) {
        "use strict";
        e.preventDefault();
        let taskToAdd = this.refs.taskToAdd.value;

        if (taskToAdd !== '') {
            this.refs.taskToAdd.value = '';
            this.props.onAddTask(taskToAdd);
        }
    },
    render: function() {
        "use strict";
        return (
            <div className="container__footer">
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" ref="taskToAdd" placeholder="What do you need to do?"/>
                    <button className="button expanded">Add Task</button>
                </form>
            </div>
        )
    }
});

module.exports = AddTodo;