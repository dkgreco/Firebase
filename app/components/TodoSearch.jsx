const React = require('react'),
    {connect} = require('react-redux'),
    actions = require('../src-redux/actionGenerators/actionGenerators.jsx');

let TodoSearch = React.createClass({
    searchBy: function() {
        "use strict";
        let {changeSearchFilter} = actions;
        let {dispatch} = this.props;
        let {searchFilter} = this.refs;
        let searchFilterValue = searchFilter.value;
        dispatch(changeSearchFilter(searchFilterValue));
    },
    changeView: function() {
        "use strict";
        let {showCompletedTasks} = actions;
        let {dispatch, showCompleted} = this.props;
        dispatch(showCompletedTasks(!showCompleted));
    },
    render: function() {
        "use strict";
        let {showCompleted, searchFilter} = this.props;
        return (
            <div className="container__header">
                <div>
                    <input type="search" ref="searchFilter" placeholder="Search By Task Name"
                           value={searchFilter} onChange={this.searchBy}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" checked={showCompleted} onClick={this.changeView}/>
                        Show completed tasks
                    </label>
                </div>
            </div>
        )
    }
});

module.exports = connect(state => state)(TodoSearch);