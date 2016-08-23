import React, { Component } from 'react';
import WeatherCard from './WeatherCard.jsx';
import Fetcher from '../services/Fetcher.jsx';

class WeatherPanel extends Component {
    render() {
        return (
            <div className="weather-panel">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            <div className="input-group input-group-lg">
                                <input type="text" className="form-control" />
                                <span className="input-group-btn">
                                    <button className="btn btn-primary">Add</button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="row">
                        <div className="col-sm-4">
                            <WeatherCard dataUrl={this.props.dataUrl} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WeatherPanel;
