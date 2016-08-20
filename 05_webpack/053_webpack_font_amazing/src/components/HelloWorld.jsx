import React, { Component } from 'react';
import Social from './Social.jsx';

const social = {
    twitter: 'vietlq',
    facebook: 'vietlq85',
    instagram: 'vietlq',
};

class HelloWorld extends Component {
    render() {
        return (
            <div className="outer-container">
                <div className="page-header">
                    <h1>Hello, React World! <small>Expore React inside out</small></h1>
                </div>
                <div className="container">
                    <h2>Here's the body of the page</h2>
                    <div className="row">
                        <button className="btn btn-primary">Press me</button>
                    </div>
                    <div className="row">
                        <Social social={social} />
                    </div>
                </div>
            </div>
        );
    }
}

export default HelloWorld;
