import React, { Component } from 'react';
import ForecastItem from './ForecastItem.jsx';
import WeatherUtil from '../services/OpenWeatherMapUtil.jsx';

class WeatherCard extends Component {
    constructor(props) {
        super(props);

        this.state = { city : '', today: {}, nextDays: [] };
    }

    componentWillMount() {
        // Unable to call .bind(this) due to return type of Fetcher.get
        var theOwner = this;

        WeatherUtil.getDailyForecastByCityId({
            appId: this.props.appId,
            cityId: this.props.cityId
        })
        .then(function ({ city, dailyForecast }) {
            var today = dailyForecast[0];
            dailyForecast.shift();

            theOwner.setState({
                city: city,
                today: today,
                nextDays: dailyForecast
            });
        })
        .catch(function (error) {
            console.log('WeatherCard::componentWillMount - Error: ' + error);
        });
    }

    render() {
        const todayWeather = this.state.today;

        var createForecastItem = function(forecast, index) {
            return (<ForecastItem key={index} forecastDetails={forecast} />)
        };

        return (
            <div className="weather-card">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="forecast-weather-city">{this.state.city}</h3>
                        <h4 className="forecast-weather-date">{todayWeather.date}</h4>
                        <br/>
                        <div className="row">
                            <div className="col-xs-6 forecast-weather-icon">
                                <h1><i className={todayWeather.iconStyle}></i></h1>
                            </div>
                            <div className="col-xs-6 forecast-temperature">
                                <span>{todayWeather.simpleAvgTemp}&deg;</span>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <div className="row">
                            <div className="col-xs-6 forecast-wind-dir">
                                <h4><i className={todayWeather.windDir}></i>
                                    &nbsp;&nbsp;{todayWeather.windDir}&deg;</h4>
                            </div>
                            <div className="col-xs-6 forecast-wind-speed">
                                <h4><i className="wi wi-strong-wind"></i>
                                    &nbsp;&nbsp;{todayWeather.windSpeed}mph</h4>
                            </div>
                        </div>
                        <br/>
                    </div>
                    <ul className="list-group weather-card-list">
                        {this.state.nextDays.map(createForecastItem)}
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
