import React from 'react';
import * as Redux from 'react-redux';
import {clientLogout} from '../src-redux/actionGenerators/actionGenerators.jsx'
import AddTodo from 'AddTodo';
import TodoList from 'TodoList';
import TodoSearch from 'TodoSearch';

export let TodoApp = React.createClass({
    onLogout(e) {
        "use strict";
        let {dispatch} = this.props;
        e.preventDefault();
        dispatch(clientLogout());
    },
    render() {
        "use strict";
        return (
            <div>
                <div className="page-actions">
                    <a href="#" onClick={this.onLogout}>Log Out</a>
                </div>
                <h1 className="page-title">Task App</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch/>
                            <TodoList/>
                            <AddTodo/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export default Redux.connect()(TodoApp);