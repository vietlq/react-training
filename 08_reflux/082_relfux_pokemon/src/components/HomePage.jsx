import React, { Component } from 'react';
import Social from './Social.jsx';
import MainPanel from './MainPanel.jsx';

const social = {
    twitter: 'vietlq',
    facebook: 'vietlq85',
    instagram: 'vietlq',
};

// Colors to use
const CARD_COLORS = [
    '#EC4444', '#79B8AF', '#817871', '#357DB5', '#E68E4F',
    '#A6A539', '#F27E7E', '#9770A7', '#CE4571', '#3F3F3F',
];
//CARD_COLORS[Math.floor(Math.random() * CARD_COLORS.length)];

const BASE_URL = 'http://localhost:6969';

class HomePage extends Component {
    render() {
        return (
            <div className="outer-container">
                <div className="page-header">
                    <h1>Ingredients</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <MainPanel baseUrl={BASE_URL}
                            title="Ingredients for B-day Cake" />
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
