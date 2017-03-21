const React = require('react'),
    moment = require('moment');

let Todo;
Todo = React.createClass({
    doNothing: function() {
        "use strict";
        //does nothing.  To resolve karma error: ERROR: 'Warning: Failed form propType: Invalid prop onChange of type
        // string supplied to input, expected function. Check the render method of Todo
    },
    toggleValue: function () {
        "use strict";
        let {id} = this.props;
        return this.props.onToggle(id);
    },
    render: function() {
        "use strict";
        let {completed, action, createdAt, completedAt} = this.props;
        let renderTimeStampMessage = () => {
            let displayMarkup,
                createTS = moment.unix(createdAt).format('MMMM Do, YYYY @ HH:mm:ss'),
                completeTS = moment.unix(completedAt).format('MMMM Do, YYYY @ HH:mm:ss');

            displayMarkup = <p>Created On: {createTS}</p>;
            if (completed) {
                displayMarkup = <p>Created On: {createTS}<br/>Completed On: {completeTS}</p>
            }

            return displayMarkup;
        };
        return (
            <div onClick={this.toggleValue}>
                <input type="checkbox" checked={completed} onChange={this.doNothing}/>
                {action}
                {renderTimeStampMessage()}
            </div>
        )
    }
});

module.exports = Todo;