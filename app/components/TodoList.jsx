const React = require('react'),
    {connect} = require('react-redux'),
    todoAPI = require('todoAPI'),
    Todo = require('Todo');

export let TodoList;
TodoList = React.createClass({
    render: function() {
        "use strict";
        let {displayList, showCompleted, searchFilter} = this.props,
            renderTaskList = () => {
                let filteredTaskList = todoAPI.filterTasks(displayList, showCompleted, searchFilter);
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

export default connect(state => state)(TodoList);