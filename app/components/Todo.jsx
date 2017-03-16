const React = require('react');

let Todo;
Todo = React.createClass({
    render: function() {
        "use strict";
        let {id, action} = this.props;
        return (
            <div>
                {id}. {action}
            </div>
        )
    }
});

module.exports = Todo;