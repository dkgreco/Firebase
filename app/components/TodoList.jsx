const React = require('react'),
    Todo = require('Todo');

let TodoList;
TodoList = React.createClass({
    propTypes: {
        displayList: React.PropTypes.array.isRequired
    },
    render: function() {
        "use strict";
        let {displayList} = this.props,
            renderTaskList = () => {
                return displayList.map(task => {
                    return (
                        //use the spread operator to pass all attrs down
                        <Todo key={task.id} {...task} onToggle={this.props.onToggle}/>
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

module.exports = TodoList;