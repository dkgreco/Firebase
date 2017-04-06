import React from 'react';
import * as Redux from 'react-redux';
import {clientLogin, clientLogout} from '../src-redux/actionGenerators/actionGenerators.jsx'


export let Login = React.createClass({
    onLogin () {
        "use strict";
        let {dispatch} = this.props;
        dispatch(clientLogin());
    },
    render() {
        "use strict";
        return (
            <div>
                <h1 className="page-title">Task Application Login</h1>
                <div className="row">
                    <div className="columns small-centered small-10 medium-6 large-4">
                        <div className="callout callout-auth">
                            <h3>Login</h3>
                            <p>Log in with your Github Account</p>
                            <button className="button" onClick={this.onLogin}>Login with Github</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export default Redux.connect()(Login);