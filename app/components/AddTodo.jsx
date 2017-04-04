const React = require('react'),
    {connect} = require('react-redux'),
    actions = require('../src-redux/actionGenerators/actionGenerators.jsx');

let AddTodo = React.createClass({
    handleFormSubmit: function(e) {
        "use strict";
        e.preventDefault();
        let {dispatch} = this.props;
        let {setTask} = actions;
        let task = this.refs.taskToAdd.value;
        if (task !== '') {
            this.refs.taskToAdd.value = '';
            dispatch(setTask(task));
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

module.exports = connect()(AddTodo);