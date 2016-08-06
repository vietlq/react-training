var React = require('react');
var HeadingStats = require('./HeadingStats.jsx');

var TrafficStats = React.createClass({
    getinitialState: function() {
        return {
            newVisitors: 0,
            bounceRate: '0%',
            searches: '0%',
            outBandwidth: '0GB',
        };
    },
    render: function() {
        return (
            <div className="traffic-stats">
                <div className="traffic-stats-item">
                    <HeadingStats figure={this.props.newVisitors}
                        description="New Visitors" headingColor="#0096d0" />
                </div>
                <div className="traffic-stats-item">
                    <HeadingStats figure={this.props.bounceRate}
                        description="Bounce Rate" headingColor="#b28ad6" />
                </div>
                <div className="traffic-stats-item">
                    <HeadingStats figure={this.props.searches}
                        description="Searches" headingColor="#ff4826" />
                </div>
                <div className="traffic-stats-item">
                    <HeadingStats figure={this.props.outBandwidth}
                        description="Outgoing Bandwidth" headingColor="#63c254" />
                </div>
            </div>
        );
    }
});

module.exports = TrafficStats;
