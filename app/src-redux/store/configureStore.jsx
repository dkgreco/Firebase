import * as redux from 'redux';
import * as reducers from '../reducers/reducers.jsx';
import thunk from 'redux-thunk';

let configure = () => {
    let {mapReducer, searchFilterReducer,
    showCompletedReducer, taskListReducer,
    authReducer} = reducers;

    let reducer = redux.combineReducers({
        auth: authReducer,
        displayList: taskListReducer,
        map: mapReducer,
        searchFilter: searchFilterReducer,
        showCompleted: showCompletedReducer
    });

    return redux.createStore(reducer, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
};

module.exports = configure;