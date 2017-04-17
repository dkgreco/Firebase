import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {hashHistory} from 'react-router';
import firebase from 'app/firebase/';
import {fetchDataForView, refetchClientAuthInfo} from './src-redux/actionGenerators/actionGenerators.jsx';
import router from 'app/router';

let updateAuthState = user => {
    if (user) {
        let {uid, displayName} = user;
        let {providerId} = user.providerData[0];
        let {auth} = store.getState();
        if (Object.keys(auth).length === 0) {
            store.dispatch(refetchClientAuthInfo(uid, displayName, providerId));
        }
        store.dispatch(fetchDataForView(uid));
        hashHistory.push('/tasks');
    } else {
        hashHistory.push('/');
    }
};
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

//Load Foundation and Custom CSS
require('style!css!sass!applicationStyles');
$('document').foundation();

ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>,
    document.getElementById('app')
);