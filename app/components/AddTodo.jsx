import React from 'react';
import * as Redux from 'react-redux'
import {setTask} from '../src-redux/actionGenerators/actionGenerators.jsx';

export let AddTodo = React.createClass({
    handleFormSubmit: function(e) {
        "use strict";
        e.preventDefault();
        let {dispatch} = this.props;
        console.log(this.props);
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

export default Redux.connect()(AddTodo);