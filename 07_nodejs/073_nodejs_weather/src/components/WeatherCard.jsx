import React, { Component } from 'react';
import ForecastItem from './ForecastItem.jsx';
import Fetcher from '../services/Fetcher.jsx';
import moment from 'moment';

class WeatherCard extends Component {
    constructor(props) {
        super(props);

        this.state = { city : '', items: [] };
    }

    componentWillMount() {
        // Unable to call .bind(this) due to return type of Fetcher.get
        var theOwner = this;

        Fetcher.get(this.props.dataUrl)
        .then(function (data) {
            console.log(data)
            theOwner.setState({
                city: data.city.name + ', ' + data.city.country,
                items: data.list
            });
        })
        .catch(function (error) {
            console.log('Error: ' + error);
        });
    }

    render() {
        var createForecastItem = function(forecast, index) {
            const date = new Date(parseInt(forecast.dt) * 1000);
            console.log(date.toISOString());
            const theMoment = moment(date.toISOString());
            const forecastDetails = {
                date: theMoment.format('ll'),
                minTemp: parseInt(forecast.temp.min),
                maxTemp: parseInt(forecast.temp.max),
            };

            return (<ForecastItem key={index} forecastDetails={forecastDetails} />)
        };

        return (
            <div className="weather-card">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4>{this.state.city}</h4>
                    </div>
                    <ul className="list-group weather-card-list">
                        {this.state.items.map(createForecastItem)}
                    </ul>
                    <div className="panel-body weather-card-bottom">
                        <span>Forecast by <a href="http://openweathermap.org/">http://openweathermap.org/</a></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default WeatherCard;
