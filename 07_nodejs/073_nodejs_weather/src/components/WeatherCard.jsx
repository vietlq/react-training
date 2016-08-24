import React, { Component } from 'react';
import ForecastItem from './ForecastItem.jsx';
import Fetcher from '../services/Fetcher.jsx';
import moment from 'moment';

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
        var extractForecastData = function(forecast) {
            if (! forecast.dt) {
                return {
                    date: '',
                    minTemp: -999,
                    maxTemp: -999,
                    windDir: 999,
                    windSpeed: -1
                };
            }

            const date = new Date(parseInt(forecast.dt) * 1000);
            const theMoment = moment(date.toISOString());

            return {
                date: theMoment.format('MMMM DD'),
                minTemp: parseInt(forecast.temp.min),
                maxTemp: parseInt(forecast.temp.max),
                windDir: forecast.deg,
                windSpeed: Math.round(parseFloat(forecast.speed)*10)/10
            };
        }

        const mainForecastItem = extractForecastData(this.state.mainItem);
        const mainItemWindDir = "wi wi-wind towards-" + mainForecastItem.windDir + "-deg";

        var createForecastItem = function(forecast, index) {
            return (<ForecastItem key={index}
                forecastDetails={extractForecastData(forecast)} />)
        };

        return (
            <div className="weather-card">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4>{this.state.city}</h4>
                        <div className="col-xs-6 forecast-wind-dir">
                            <h4><i className={mainItemWindDir}></i>
                                &nbsp;&nbsp;{mainForecastItem.windDir}&deg;</h4>
                        </div>
                        <div className="col-xs-6 forecast-wind-speed">
                            <h4><i className="wi wi-strong-wind"></i>
                                &nbsp;&nbsp;{mainForecastItem.windSpeed}mph</h4>
                        </div>
                        <br/><br/><br/>
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
