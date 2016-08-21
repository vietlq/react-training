import React, { Component } from 'react';
import Social from './Social.jsx';
import ListManager from './ListManager.jsx';

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
                    <h1>Sample React => Server Communication</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <ListManager dataUrl="http://localhost:6969/birds" />
                        </div>
                        <div className="col-sm-4">
                            <ListManager dataUrl="http://localhost:6969/animals" />
                        </div>
                        <div className="col-sm-4">
                            <ListManager dataUrl="http://localhost:6969/secrets" />
                        </div>
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
