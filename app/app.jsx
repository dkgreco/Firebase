
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {hashHistory} from 'react-router';
import firebase from 'app/firebase/';
import {fetchDataForView} from './src-redux/actionGenerators/actionGenerators.jsx';
import router from 'app/router';

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

ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>,
    document.getElementById('app')
);