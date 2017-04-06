const React = require('react'),
    ReactDOM = require('react-dom'),
    redux = require('redux'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router'),
    {Provider} = require('react-redux');

import Login from 'Login';
import TodoApp from 'TodoApp';
import firebase from 'app/firebase/';
import {fetchDataForView} from './src-redux/actionGenerators/actionGenerators.jsx';

let updateAuthState = user => user ? hashHistory.push('/tasks') : hashHistory.push('/');
firebase.auth().onAuthStateChanged(updateAuthState);

//load redux
let store = require('./src-redux/store/configureStore.jsx')();
//listen and watch the changes to the store...
if(process.env.NODE_ENV !== 'production') {
    store.subscribe(() => {
        let newState = store.getState();
        console.log('NewState: ', newState);
    });
}

//Init DB Data
store.dispatch(fetchDataForView());

//Load Foundation and Custom CSS
require('style!css!sass!applicationStyles');
$('document').foundation();

let requireLogin = (nextState, replace, next) => {
    "use strict";
    if (!firebase.auth().currentUser) {
        replace('/');
    }
    next();
};

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/">
                <Route path="tasks" component={TodoApp} onEnter={requireLogin}/>
                <IndexRoute component={Login}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);