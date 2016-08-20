import React, { Component } from 'react';
import Social from './Social.jsx';
import EmailField from './EmailField.jsx';

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
                    <div className="col-sm-6">
                        <div className="panel panel-default">
                            <div className="panel-body">
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
