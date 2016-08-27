import React, { Component } from 'react';
import WeatherCard from './WeatherCard.jsx';
import WeatherUtil from '../services/OpenWeatherMapUtil.jsx';

class WeatherPanel extends Component {
    constructor(props) {
        super(props);

        this.state = { cities: [], forecasts: {} };

        this.onCitySubmitted = this.onCitySubmitted.bind(this);
    }

    onCitySubmitted(event) {
        // Prevent form submission
        event.preventDefault();
        // Unable to call .bind(this) due to return type of Fetcher.get
        var theOwner = this;

        const cityName = this.refs.fieldCityName.value;

        WeatherUtil.getDailyForecastByCityName({
            appId: this.props.appId,
            cityName: cityName
        })
        .then(function ({ city, dailyForecast }) {
            // Process returned results
            var today = dailyForecast[0];
            dailyForecast.shift();
            const newForecast = {
                city: city,
                today: today,
                nextDays: dailyForecast
            };
            console.log(newForecast);
            console.log(theOwner);

            // Make copies
            var { cities, forecasts } = theOwner.state;
            // Only add the city to the list if it hasn't been added yet
            if (! forecasts[cityName]) {
                cities.push(cityName);
            }
            // Always set the forecast
            forecasts[cityName] = newForecast;
            console.log(forecasts);

            // Remember to update the state
            theOwner.setState({
                cities: cities,
                forecasts: forecasts
            });

            // And clear the input
            theOwner.refs.fieldCityName.value = '';
        })
        .catch(function (error) {
            console.log('WeatherPanel::onCitySubmitted - Error: ' + error);
        });
    }

    render() {
        var createWeatherCard = function(cityName, index) {
            return (<WeatherCard key={index}
                cityForecast={this.state.forecasts[cityName]} />);
        };

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
                        <div className="col-sm-4">
                            {this.state.cities.map(createWeatherCard)}
                        </div>
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
