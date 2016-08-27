import React, { Component } from 'react';
import WeatherCard from './WeatherCard.jsx';
import WeatherUtil from '../services/OpenWeatherMapUtil.jsx';

class WeatherPanel extends Component {
    constructor(props) {
        super(props);

        this.state = { cities: [], forecasts: {} };

        this.onCitySubmitted = this.onCitySubmitted.bind(this);
    }

    componentWillMount() {
    }

    onCitySubmitted(event) {
        // Prevent form submission
        event.preventDefault();
        // Get the city name
        const cityName = this.refs.fieldCityName.value;

        WeatherUtil.getDailyForecastByCityName({
            appId: this.props.appId,
            cityName: cityName
        })
        .then(function (data) {
            var { city, dailyForecast } = data;
            // Process returned results
            var today = dailyForecast[0];
            dailyForecast.shift();
            const newForecast = {
                city: city,
                today: today,
                nextDays: dailyForecast
            };
            // Make copies
            var { cities, forecasts } = this.state;
            // Only add the city to the list if it hasn't been added yet
            if (! forecasts[cityName]) {
                cities.push(cityName);
            }
            // Always set the forecast
            forecasts[cityName] = newForecast;
            // Remember to update the state
            this.setState({
                cities: cities,
                forecasts: forecasts
            });
            // And clear the input
            this.refs.fieldCityName.value = '';
        }.bind(this))
        .catch(function (error) {
            console.log('WeatherPanel::onCitySubmitted - Error: ' + error);
        });
    }

    render() {
        var createWeatherCard = function(cityName, index) {
            return (
                <div key={index} className="col-sm-4">
                    <WeatherCard cityForecast={this.state.forecasts[cityName]} />
                </div>);
        }.bind(this);

        return (
            <div className="weather-panel">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            <form onSubmit={this.onCitySubmitted}>
                                <div className="input-group input-group-lg">
                                    <input type="text" className="form-control"
                                        ref="fieldCityName" />
                                    <span className="input-group-btn">
                                        <button className="btn btn-primary">Add</button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="row">
                        {this.state.cities.map(createWeatherCard)}
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Yahoo</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WeatherPanel;
