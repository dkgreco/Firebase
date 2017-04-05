const React = require('react'),
    ReactDOM = require('react-dom'),
    redux = require('redux'),
    actions = require('./src-redux/actionGenerators/actionGenerators.jsx'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router'),
    TodoApp = require('TodoApp'),
    {Provider} = require('react-redux');

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
store.dispatch(actions.getListFromDB());

//Load Foundation and Custom CSS
require('style!css!sass!applicationStyles');
$('document').foundation();

ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.getElementById('app')
);