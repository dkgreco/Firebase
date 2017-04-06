import React from 'react';
import * as Redux from 'react-redux';

export let Logout = React.createClass({
    render: function() {
        "use strict";
        return (
            <div>
                <p>You have been logged out of the system.</p>
            </div>
        )
    }
});

export default Redux.connect()(Logout);