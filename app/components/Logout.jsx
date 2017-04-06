const React = require('react'),
    {connect} = require('react-redux'),
    actions = require('../src-redux/actionGenerators/actionGenerators.jsx');

let Logout = React.createClass({
    render: function() {
        "use strict";
        return (
            <div>
                <p>You have been logged out of the system.</p>
            </div>
        )
    }
});

module.exports = connect()(Logout);