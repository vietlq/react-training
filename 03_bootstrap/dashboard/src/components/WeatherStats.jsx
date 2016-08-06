var React = require('react');

var WeatherStats = React.createClass({
    render: function() {
        var bodyStyle = {
            color: "#FFFFFF",
            textAlign: "center",
            background: "orange"
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

        return (
            <div className="panel panel-default">
                <div style={bodyStyle} className="panel-body stats-body">
                    <span className="stats-figure">{this.props.figure}&deg;</span><br/>
                    <span className="stats-description">{this.props.description}</span>
                </div>
            </div>
        );
    }
});

module.exports = WeatherStats;
