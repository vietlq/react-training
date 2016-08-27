import React, { Component } from 'react';
import ForecastItem from './ForecastItem.jsx';
import Fetcher from '../services/Fetcher.jsx';
import WeatherUtil from '../services/OpenWeatherMapUtil.jsx';
import moment from 'moment';

////////////////////////////////////////////////////////////////

const SOURCE_ICON_TO_WI_DATA = {
    "01d": {
        desc: "Clear Sky",
        wiCode: "wi-day-sunny",
        mode: "DAY",
    },
    "01n": {
        desc: "Clear Sky",
        wiCode: "wi-night-clear",
        mode: "NIGHT",
    },
    "02d": {
        desc: "Few Clouds",
        wiCode: "wi-day-cloudy",
        mode: "DAY",
    },
    "02n": {
        desc: "Few Clouds",
        wiCode: "wi-night-partly-cloudy",
        mode: "NIGHT",
    },
    "03d": {
        desc: "Scattered Clouds",
        wiCode: "wi-day-cloudy",
        mode: "DAY",
    },
    "03n": {
        desc: "Scattered Clouds",
        wiCode: "wi-night-alt-cloudy",
        mode: "NIGHT",
    },
    "04d": {
        desc: "Broken Clouds",
        wiCode: "wi-day-cloudy",
        mode: "DAY",
    },
    "04n": {
        desc: "Broken Clouds",
        wiCode: "wi-night-alt-cloudy",
        mode: "NIGHT",
    },
    "09d": {
        desc: "Shower Rain",
        wiCode: "wi-day-showers",
        mode: "DAY",
    },
    "09n": {
        desc: "Shower Rain",
        wiCode: "wi-night-alt-showers",
        mode: "NIGHT",
    },
    "10d": {
        desc: "Rain",
        wiCode: "wi-day-rain",
        mode: "DAY",
    },
    "10n": {
        desc: "Rain",
        wiCode: "wi-night-alt-rain",
        mode: "NIGHT",
    },
    "11d": {
        desc: "Thunderstorm",
        wiCode: "wi-day-thunderstorm",
        mode: "DAY",
    },
    "11n": {
        desc: "Thunderstorm",
        wiCode: "wi-night-alt-thunderstorm",
        mode: "NIGHT",
    },
    "13d": {
        desc: "Snow",
        wiCode: "wi-day-snow",
        mode: "DAY",
    },
    "13n": {
        desc: "Snow",
        wiCode: "wi-night-alt-snow",
        mode: "NIGHT",
    },
    "13d": {
        desc: "Mist",
        wiCode: "wi-day-fog",
        mode: "DAY",
    },
    "13n": {
        desc: "Mist",
        wiCode: "wi-night-fog",
        mode: "NIGHT",
    },
};

var sourceIconToWIData = function(sourceIcon) {
    return SOURCE_ICON_TO_WI_DATA[sourceIcon] || {
        desc: "Sky Fall",
        wiCode: "wi-alien",
        mode: "Chaos",
    };
}

var extractForecastData = function(forecast) {
    if (! forecast.dt) {
        return {
            date: '',
            minTemp: -999,
            maxTemp: -999,
            simpleAvgTemp: -999,
            windDir: 999,
            windSpeed: -1,
            iconStyle: "wi wi-alien",
        };
    }

    const date = new Date(parseInt(forecast.dt) * 1000);
    const theMoment = moment(date.toISOString());

    return {
        date: theMoment.format('MMMM DD'),
        minTemp: parseInt(forecast.temp.min),
        maxTemp: parseInt(forecast.temp.max),
        simpleAvgTemp: ((parseInt(forecast.temp.min) + parseInt(forecast.temp.max)) / 2),
        windDir: forecast.deg,
        windSpeed: Math.round(parseFloat(forecast.speed)*10)/10,
        iconStyle: ("wi " + sourceIconToWIData(forecast.weather[0].icon).wiCode),
    };
}

var getWindDirStyle = function(windDir) {
    return ("wi wi-wind towards-" + windDir + "-deg");
}

////////////////////////////////////////////////////////////////

class WeatherCard extends Component {
    constructor(props) {
        super(props);

        this.state = { city : '', mainItem: {}, items: [] };
    }

    componentWillMount() {
        // Unable to call .bind(this) due to return type of Fetcher.get
        var theOwner = this;

        Fetcher.get(this.props.dataUrl)
        .then(function (data) {
            var resultList = data.list;
            var mainItem = resultList[0];
            console.log(mainItem);
            resultList.shift();
            theOwner.setState({
                city: data.city.name + ', ' + data.city.country,
                mainItem: mainItem,
                items: resultList
            });
        })
        .catch(function (error) {
            console.log('Error: ' + error);
        });
    }

    render() {
        const mainForecastItem = extractForecastData(this.state.mainItem);
        const mainItemWindDir = getWindDirStyle(mainForecastItem.windDir);

        var createForecastItem = function(forecast, index) {
            return (<ForecastItem key={index}
                forecastDetails={extractForecastData(forecast)} />)
        };

        return (
            <div className="weather-card">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="forecast-weather-city">{this.state.city}</h3>
                        <h4 className="forecast-weather-date">{mainForecastItem.date}</h4>
                        <br/>
                        <div className="row">
                            <div className="col-xs-6 forecast-weather-icon">
                                <h1><i className={mainForecastItem.iconStyle}></i></h1>
                            </div>
                            <div className="col-xs-6 forecast-temperature">
                                <span>{mainForecastItem.simpleAvgTemp}&deg;</span>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <div className="row">
                            <div className="col-xs-6 forecast-wind-dir">
                                <h4><i className={mainItemWindDir}></i>
                                    &nbsp;&nbsp;{mainForecastItem.windDir}&deg;</h4>
                            </div>
                            <div className="col-xs-6 forecast-wind-speed">
                                <h4><i className="wi wi-strong-wind"></i>
                                    &nbsp;&nbsp;{mainForecastItem.windSpeed}mph</h4>
                            </div>
                        </div>
                        <br/>
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
