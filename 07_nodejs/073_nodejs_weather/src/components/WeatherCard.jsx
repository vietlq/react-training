import React, { Component } from 'react';
import List from './List.jsx';
import Fetcher from '../services/Fetcher.jsx';

class WeatherCard extends Component {
    constructor(props) {
        super(props);

        this.state = { items: [] };
    }

    componentWillMount() {
        // Unable to call .bind(this) due to return type of Fetcher.get
        var theOwner = this;

        Fetcher.get(this.props.dataUrl)
        .then(function (data) {
            console.log(data)
            theOwner.setState({items: ['a', 'b', 'c', 'd']});
        })
        .catch(function (error) {
            console.log('Error: ' + error);
        });
    }

    render() {
        return (
            <div className="weather-card">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h1>Yahoo</h1>
                    </div>
                    <List items={this.state.items} />
                    <div className="panel-body weather-card-bottom">
                        <span>Forecast by <a href="http://openweathermap.org/">http://openweathermap.org/</a></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default WeatherCard;
