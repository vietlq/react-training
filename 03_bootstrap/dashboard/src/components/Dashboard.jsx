var React = require('react');
var LeftBar = require('./LeftBar.jsx');
var RightBar = require('./RightBar.jsx');

var Dashboard = React.createClass({
    render: function() {
        return (
            <div className="dashboard-stats">
                <div className="row">
                    <div className="col-sm-9">
                        <LeftBar performanceStats={this.props.performanceStats}
                            listShotStatsItems={this.props.listShotStatsItems} />
                    </div>
                    <div className="col-sm-3">
                        <RightBar weatherStats={this.props.weatherStats}
                            trafficStats={this.props.trafficStats} />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Dashboard;
