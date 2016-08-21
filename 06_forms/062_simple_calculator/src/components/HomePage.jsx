import React, { Component } from 'react';
import Social from './Social.jsx';
import SimpleCalculator from './SimpleCalculator.jsx';

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
                    <h1>Simple Calculator</h1>
                </div>
                <div className="container">
                    <div className="col-sm-6 col-sm-offset-3">
                        <SimpleCalculator />
                        <Social social={social} />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
