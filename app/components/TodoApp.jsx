const React = require('react'),
    TodoList = require('TodoList');

let TodoApp;
TodoApp = React.createClass({
    getInitialState: function() {
        "use strict";
        return {
            todos: [
                {
                    id: 1,
                    action: 'walk the dog'
                },
                {
                    id: 2,
                    action: 'get groceries'
                },
                {
                    id: 3,
                    action: 'make dinner'
                }
            ]
        }
    },
    render: function() {
        "use strict";
        let {todos} = this.state;
        return (
            <div>
                Render From TodoApp.jsx
                <TodoList displayList={todos}/>
            </div>
        )
    }
});

module.exports = TodoApp;