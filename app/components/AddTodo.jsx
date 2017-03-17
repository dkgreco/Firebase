const React = require('react');

let AddTodo;
AddTodo = React.createClass({
    handleFormSubmit: function(e) {
        "use strict";
        e.preventDefault();
        let taskToAdd = this.refs.taskToAdd.value;

        if (taskToAdd !== '') {
            this.refs.taskToAdd.value = '';
            this.props.handleAddTask(taskToAdd);
        }
        /*
        return () => {
            this.props.handleAddTask(taskToAdd);
        }*/
    },
    render: function() {
        "use strict";
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" ref="taskToAdd" placeholder="Add New Todo Here"/>
                    <button>Add</button>
                </form>
            </div>
        )
    }
});

module.exports = AddTodo;