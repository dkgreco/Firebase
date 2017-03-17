const React = require('react');

let TodoSearch;
TodoSearch = React.createClass({
    handleSearch: function() {
        "use strict";
        let showCompleted = this.refs.showCompleted.checked,
            searchFilter = this.refs.searchFilter.value;

        this.props.onSearch(showCompleted, searchFilter);
    },
    render: function() {
        "use strict";
        return (
            <div>
                <div>
                    <input type="search" ref="searchFilter" placeholder="Search By Task Name" onChange={this.handleSearch}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
                    </label>
                </div>
            </div>
        )
    }
});

module.exports = TodoSearch;