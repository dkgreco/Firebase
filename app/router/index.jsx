import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import TodoApp from 'TodoApp';
import Login from 'Login';
import firebase from 'app/firebase/';

let requireLogin = (nextState, replace, next) => {
    "use strict";
    if (!firebase.auth().currentUser) {
        replace('/');
    }
    next();
};

let loggedInRedirect = (nextState, replace, next) => {
    "use strict";
    if (firebase.auth().currentUser) {
        replace('/tasks');
    }
    next();
};

export default (
    <Router history={hashHistory}>
        <Route path="/">
            <Route path="tasks" component={TodoApp} onEnter={requireLogin}/>
            <IndexRoute component={Login} onEnter={loggedInRedirect}/>
        </Route>
    </Router>
);