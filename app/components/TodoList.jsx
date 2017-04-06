import React from 'react';
import * as Redux from 'react-redux';
import * as api from 'todoAPI';
import Todo from 'Todo';

export let TodoList = React.createClass({
    render: function() {
        "use strict";
        let {displayList, showCompleted, searchFilter} = this.props,
            renderTaskList = () => {
                let filteredTaskList = api.filterTasks(displayList, showCompleted, searchFilter);
                if (filteredTaskList.length === 0) {
                    return (
                        <p className="container__message">Nothing To Do</p>
                    )
                }
                return filteredTaskList.map(task => {
                    return (
                        //use the spread operator to pass all attrs down
                        <Todo key={task.id} {...task}/>
                    )
                });
            };
        return (
            <div>
                {renderTaskList()}
            </div>
        )
    }
});

export default Redux.connect(state => state)(TodoList);