const React = require('react'),
    ReactDOM = require('react-dom'),
    redux = require('redux'),
    actions = require('./src-redux/actionGenerators/actionGenerators.jsx'),
    todoAPI = require('todoAPI'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router'),
    TodoApp = require('TodoApp'),
    {Provider} = require('react-redux');

//load redux
let store = require('./src-redux/store/configureStore.jsx')();
store.subscribe(() => {
    let newState = store.getState();
    console.log('NewState: ', newState);
    todoAPI.setTasks(newState.displayList);
});

let initialDisplayList = todoAPI.getTasks();
store.dispatch(actions.buildTaskListFromLocalStorage(initialDisplayList));

//Load Foundation and Custom CSS
require('style!css!sass!applicationStyles');
$('document').foundation();

ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.getElementById('app')
);