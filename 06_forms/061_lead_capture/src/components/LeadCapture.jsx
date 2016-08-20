import React, { Component } from 'react';
import EmailField from './EmailField.jsx';
import NameField from './NameField.jsx';

class LeadCapture extends Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <NameField fieldId={this.props.fieldIds.fname}
                        nameType="First" />
                    <NameField fieldId={this.props.fieldIds.lname}
                        nameType="Last" />
                    <EmailField fieldId={this.props.fieldIds.email} />
                </div>
            </div>
        );
    }
}

export default LeadCapture;
