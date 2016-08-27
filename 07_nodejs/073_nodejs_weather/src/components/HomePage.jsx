import React, { Component } from 'react';
import Social from './Social.jsx';
import WeatherPanel from './WeatherPanel.jsx';

const social = {
    twitter: 'vietlq',
    facebook: 'vietlq85',
    instagram: 'vietlq',
};

const appId = "1f5fee940a5e1ae6d2345dac139eae6f";
const cityId = "524901";

class HomePage extends Component {
    render() {
        return (
            <div className="outer-container">
                <div className="page-header">
                    <h1>Weather App</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <WeatherPanel cityId={cityId} appId={appId} />
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
