import React from 'react';
import * as Redux from 'react-redux';
import {clientLogin} from '../src-redux/actionGenerators/actionGenerators.jsx'

export let Login = React.createClass({
    onLogin_Github () {
        "use strict";
        let {dispatch} = this.props;
        dispatch(clientLogin('GitHub'));
    },
    onLogin_Facebook () {
        "use strict";
        let {dispatch} = this.props;
        dispatch(clientLogin('Facebook'));
    },
    render() {
        "use strict";
        return (
            <div>
                <h1 className="page-title">Task Application</h1>
                <div className="row">
                    <div className="columns small-centered small-10 medium-6 large-4">
                        <div className="callout callout-auth">
                            <h3>Login</h3>
                            <hr/>
                            <button className="button" onClick={this.onLogin_Github}>Login with Github</button>
                            <hr/>
                            <button className="button" onClick={this.onLogin_Facebook} disabled>Login with Facebook</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export default Redux.connect()(Login);