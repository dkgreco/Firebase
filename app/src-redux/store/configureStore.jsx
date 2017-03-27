const redux = require('redux'),
      thunk = require('redux-thunk').default;

let configure = () => {
    let {
        searchFilterReducer,
        showCompletedReducer,
        taskListReducer,
        mapReducer
    } = require('../reducers/reducers.jsx');

    let reducer = redux.combineReducers({
        searchFilter: searchFilterReducer,
        showCompleted: showCompletedReducer,
        displayList: taskListReducer,
        map: mapReducer
    });

    return redux.createStore(reducer, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
};

module.exports = configure;