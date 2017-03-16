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
            renderTodos = () => {
                return displayList.map(todo => {
                    return (
                        //use the spread operator to pass all attrs down
                        <Todo key={todo.id} {...todo}/>
                    )
                });
            };

        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
});

module.exports = TodoList;