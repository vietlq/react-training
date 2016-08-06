var React = require('react');
var HeadingStats = require('./HeadingStats.jsx');

var TrafficStats = React.createClass({
    getinitialState: function() {
        return {
            trafficStats: {
                newVisitors: 0,
                bounceRate: '0%',
                searches: '0%',
                outBandwidth: '0GB',
            }
        };
    },
    render: function() {
        let trafficStats = this.props.trafficStats;

        return (
            <div className="traffic-stats">
                <div className="traffic-stats-item">
                    <HeadingStats figure={trafficStats.newVisitors}
                        description="New Visitors" headingColor="#0096d0" />
                </div>
                <div className="traffic-stats-item">
                    <HeadingStats figure={trafficStats.bounceRate}
                        description="Bounce Rate" headingColor="#b28ad6" />
                </div>
                <div className="traffic-stats-item">
                    <HeadingStats figure={trafficStats.searches}
                        description="Searches" headingColor="#ff4826" />
                </div>
                <div className="traffic-stats-item">
                    <HeadingStats figure={trafficStats.outBandwidth}
                        description="Outgoing Bandwidth" headingColor="#63c254" />
                </div>
            </div>
        );
    }
});

module.exports = TrafficStats;
