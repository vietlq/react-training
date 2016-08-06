var React = require('react');
var ListShotStats = require('./ListShotStats.jsx');
var PerformanceStats = require('./PerformanceStats.jsx');

var LeftBar = React.createClass({
    render: function() {
        return (
            <div className="dashboard-left-bar">
                <PerformanceStats performanceStats={this.props.performanceStats} />
                <ListShotStats items={this.props.listShotStatsItems} />
            </div>
        );
    }
});

module.exports = LeftBar;
