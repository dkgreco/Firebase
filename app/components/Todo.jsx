const React = require('react'),
    {connect} = require('react-redux'),
    moment = require('moment'),
    actions = require('../src-redux/actionGenerators/actionGenerators.jsx');


export let Todo;
Todo = React.createClass({
    doNothing: function() {
        "use strict";
        //does nothing.  To resolve karma error: ERROR: 'Warning: Failed form propType: Invalid prop onChange of type
        // string supplied to input, expected function. Check the render method of Todo
    },
    toggleValue: function () {
        "use strict";
        let {id, markCompleted, dispatch} = this.props;
        let {markTaskCompleted} = actions;
        let toggleTo = !markCompleted;
        return  dispatch(markTaskCompleted(id, toggleTo)); //this.props.onToggle(id);
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
export default connect(state => state)(Todo);