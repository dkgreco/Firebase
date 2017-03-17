const React = require('react');

let Todo;
Todo = React.createClass({
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
                <input type="checkbox" checked={completed}/>
                {action}
            </div>
        )
    }
});

module.exports = Todo;