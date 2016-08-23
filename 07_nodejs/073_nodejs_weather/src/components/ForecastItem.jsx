var React = require('react');

var ForecastItem = React.createClass({
    render: function() {
        const forecastDetails = this.props.forecastDetails;
        console.log(forecastDetails);
        return (
            <li className="list-group-item">
                <div className="row">
                <div className="col-xs-4 cell-left">{forecastDetails.date}</div>
                <div className="col-xs-4 cell-center">{forecastDetails.date}</div>
                <div className="col-xs-4 cell-right">{forecastDetails.minTemp} &deg; / {forecastDetails.maxTemp} &deg;</div>
                </div>
            </li>
        );
    }
});

module.exports = ForecastItem;
