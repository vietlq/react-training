import React, { Component } from 'react';
import Social from './Social.jsx';
import EmailField from './EmailField.jsx';
import NameField from './NameField.jsx';

const social = {
    twitter: 'vietlq',
    facebook: 'vietlq85',
    instagram: 'vietlq',
};

class LeadCapture extends Component {
    render() {
        return (
            <div className="outer-container">
                <div className="page-header">
                    <h1>Lead Capture</h1>
                </div>
                <div className="container">
                    <div className="col-sm-6 col-sm-offset-3">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <NameField nameType="First" />
                                <NameField nameType="Last" />
                                <EmailField />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LeadCapture;
