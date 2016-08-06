var React = require('react');

var WeatherStats = React.createClass({
    getInitialState: function() {
        return {
            weatherStats: {
                temperature: '-273',
                location: 'Nowhere'
            }
        };
    },
    render: function() {
        var bodyStyle = {
            color: "#ffffff",
            textAlign: "center",
            background: "#ff8a00"
        };

        if (this.props.textColor) {
            bodyStyle.color = this.props.textColor;
        }

        if (this.props.textAlign) {
            bodyStyle.textAlign = this.props.textAlign;
        }

        if (this.props.bgColor) {
            bodyStyle.background = this.props.bgColor;
        }

        let weatherStats = this.props.weatherStats;

        return (
            <div className="weather-stats">
                <div className="panel panel-default">
                    <div style={bodyStyle} className="panel-body stats-body">
                        <span className="stats-figure">{weatherStats.temperature}&deg;</span><br/>
                        <span className="stats-description">{weatherStats.location}</span>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = WeatherStats;
