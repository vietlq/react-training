
import React, { Component } from 'react';
import Social from './Social.jsx';
import LeadCapture from './LeadCapture.jsx';

const social = {
    twitter: 'vietlq',
    facebook: 'vietlq85',
    instagram: 'vietlq',
};

const fieldIds = {
    fname: 'lead-cap-fname',
    lname: 'lead-cap-lname',
    email: 'lead-cap-fname'
}

class HomePage extends Component {
    render() {
        return (
            <div className="outer-container">
                <div className="page-header">
                    <h1>Lead Capture</h1>
                </div>
                <div className="container">
                    <div className="col-sm-6 col-sm-offset-3">
                        <LeadCapture fieldIds={fieldIds} />
                        <Social social={social} />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
