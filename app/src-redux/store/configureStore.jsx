import * as redux from 'redux';
import thunk from 'redux-thunk';

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