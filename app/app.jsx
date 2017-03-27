const React = require('react'),
    ReactDOM = require('react-dom'),
    redux = require('redux'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router'),
    TodoApp = require('TodoApp'),
    {Provider} = require('react-redux');

//load redux
let store = require('./src-redux/store/configureStore.jsx')();
let actions = require('./src-redux/actionGenerators/actionGenerators.jsx');

    /*{store, setSearchFilterTo, viewCompletedTasks, addTask, completeTask, removeTask, fetchLocation} =
    require('reduxAPI')(require('./src-redux/store/configureStore.jsx')());*/
const initialStoreState = store;
store.subscribe(() => console.log('NewState: ', store.getState()));
let viewInitialState = () => console.log('Initial State: ', initialStoreState);
/*
let customCalls = {
    addTask,
    setSearchFilterTo,
    viewCompletedTasks,
    completeTask,
    removeTask,
    fetchLocation,
    viewInitialState
};

window.customCalls = customCalls;
*/
//Load Foundation and Custom CSS
require('style!css!sass!applicationStyles');
$('document').foundation();

ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.getElementById('app')
);