var React = require('react');
var TrafficStats = require('./TrafficStats.jsx');
var WeatherStats = require('./WeatherStats.jsx');

var RightBar = React.createClass({
    render: function() {
        return (
            <div className="dashboard-right-bar">
                <WeatherStats weatherStats={this.props.weatherStats} />
                <TrafficStats trafficStats={this.props.trafficStats} />
            </div>
        );
    }
});

module.exports = RightBar;
