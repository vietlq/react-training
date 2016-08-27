import React, { Component } from 'react';
import ForecastItem from './ForecastItem.jsx';

class WeatherCard extends Component {
    render() {
        const cityForecast = this.props.cityForecast;
        const todayWeather = cityForecast.today;
        const bgColor = this.props.bgColor || '#357db5';
        const textColor = this.props.textColor || '#ffffff';

        const weatherCardPanelStyle = {
            borderLeft: bgColor,
            borderRight: bgColor,
            borderTop: bgColor
        };

        const weatherCardPanelHeading = {
            background: bgColor,
            color: textColor
        };

        var createForecastItem = function(forecast, index) {
            return (<ForecastItem key={index} forecastDetails={forecast} />)
        };

        return (
            <div className="weather-card">
                <div className="panel panel-default" style={weatherCardPanelStyle}>
                    <div className="panel-heading" style={weatherCardPanelHeading}>
                        <h3 className="forecast-weather-city">{cityForecast.city}</h3>
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
                                <h4><i className={todayWeather.windDirStyle}></i>
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
                        {cityForecast.nextDays.map(createForecastItem)}
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
