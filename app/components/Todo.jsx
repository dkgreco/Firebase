import React from 'react';
import * as Redux from 'react-redux';
import * as moment from 'moment';
import {setToggle, unsetTask} from '../src-redux/actionGenerators/actionGenerators.jsx';

export let Todo = React.createClass({
    doNothing: function() {
        "use strict";
        //does nothing.  To resolve karma error: ERROR: 'Warning: Failed form propType: Invalid prop onChange of type
        // string supplied to input, expected function. Check the render method of Todo
    },
    toggleValue: function () {
        "use strict";
        let {id, markCompleted, dispatch} = this.props;
        return  dispatch(setToggle(id, !markCompleted));
    },
    confirmTaskRemoval: function() {
        "use strict";
        let userAction = confirm(`Are you sure you want to remove the task for ${this.props.task}?`),
            {dispatch, id} = this.props;
        if (userAction) {
            return dispatch(unsetTask(id));
        }
    },
    render: function() {
        "use strict";
        let {task, markCompleted, taskCreatedAt, taskCompletedAt} = this.props;
        let taskClassName = markCompleted ? 'todo todo-completed' : 'todo';
        let renderTimeStampMessage = () => {
            let displayMarkup,
                createTS = moment.unix(taskCreatedAt).format('MMMM Do, YYYY @ HH:mm:ss'),
                completeTS = moment.unix(taskCompletedAt).format('MMMM Do, YYYY @ HH:mm:ss');

            displayMarkup = <p className="todo__subtext">Created On: {createTS}</p>;
            if (markCompleted) {
                displayMarkup = <p className="todo__subtext">Created On: {createTS}<br/>Completed On: {completeTS}</p>
            }

            return displayMarkup;
        };
        return (
            <div className="row">
                <div className="columns small-11 medium-10 large-10">
                    <div className={taskClassName} onClick={this.toggleValue}>
                        <input type="checkbox" checked={markCompleted} onChange={this.doNothing}/>
                        {task}
                        <hr className="line-separator"/>
                        {renderTimeStampMessage()}
                    </div>
                </div>
                <div className="columns small-11 medium-2 large-2" onClick={this.confirmTaskRemoval}>
                    <img className="todo trashIconContainer trashIcon"
                         src={require('../styles/img/transparent-glass-icon-x.png')}
                    />
                    <hr className="line-separator"/>
                </div>
            </div>
        )
    }
});
export default Redux.connect(state => state)(Todo);