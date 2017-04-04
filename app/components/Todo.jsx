const React = require('react'),
    {connect} = require('react-redux'),
    moment = require('moment'),
    actions = require('../src-redux/actionGenerators/actionGenerators.jsx');

let Todo = React.createClass({
    doNothing: function() {
        "use strict";
        //does nothing.  To resolve karma error: ERROR: 'Warning: Failed form propType: Invalid prop onChange of type
        // string supplied to input, expected function. Check the render method of Todo
    },
    toggleValue: function () {
        "use strict";
        let {id, markCompleted, dispatch} = this.props;
        let {setToggle} = actions;
        let toggleTo = !markCompleted;
        return  dispatch(setToggle(id, toggleTo));
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
            <div onClick={this.toggleValue}>
                <div className={taskClassName}>
                    <input type="checkbox" checked={markCompleted} onChange={this.doNothing}/>
                    {task}
                    {renderTimeStampMessage()}
                </div>
            </div>
        )
    }
});
module.exports = connect(state => state)(Todo);