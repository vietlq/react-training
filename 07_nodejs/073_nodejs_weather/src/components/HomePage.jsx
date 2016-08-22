import React, { Component } from 'react';
import Social from './Social.jsx';
import WeatherPanel from './WeatherPanel.jsx';

const social = {
    twitter: 'vietlq',
    facebook: 'vietlq85',
    instagram: 'vietlq',
};

class HomePage extends Component {
    render() {
        return (
            <div className="outer-container">
                <div className="page-header">
                    <h1>Weather App</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <WeatherPanel dataUrl="http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=1f5fee940a5e1ae6d2345dac139eae6f" />
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            <Social social={social} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
