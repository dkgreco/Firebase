const React = require('react');

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
        let {completed, action} = this.props;
        return (
            <div onClick={this.toggleValue}>
                <input type="checkbox" checked={completed} onChange={this.doNothing}/>
                {action}
            </div>
        )
    }
});

module.exports = Todo;