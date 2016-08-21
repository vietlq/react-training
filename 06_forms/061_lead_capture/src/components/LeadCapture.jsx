import React, { Component } from 'react';
import EmailField from './EmailField.jsx';
import NameField from './NameField.jsx';
// https://github.com/makeusabrew/bootbox/issues/457
import $ from 'jquery';
//import bootstrap from 'bootstrap';
console.log($.fn.modal) // Modal
$.fn = window.$.fn;
console.log(window.$.fn.modal) // Modal
import bootbox from 'bootbox';

class LeadCapture extends Component {
    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        var message = "";
        if (! this.refs.fieldFName.state.valid) {
            message += "<p class='.alert .alert-danger'>You must provide valid First Name</p>";
        }

        if (! this.refs.fieldLName.state.valid) {
            message += "<p class='.alert .alert-danger'>You must provide valid Last Name</p>";
        }

        if (! this.refs.fieldEmail.state.valid) {
            message += "<p class='.alert .alert-danger'>You must provide valid E-mail address</p>";
        }

        const allValid = this.refs.fieldFName.state.valid
            && this.refs.fieldLName.state.valid
            && this.refs.fieldEmail.state.valid;

        if (allValid) {
            // Send to the server
        } else {
            bootbox.alert(message);
        }
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <NameField fieldId={this.props.fieldIds.fname}
                        nameType="First" ref="fieldFName" />
                    <NameField fieldId={this.props.fieldIds.lname}
                        nameType="Last" ref="fieldLName" />
                    <EmailField fieldId={this.props.fieldIds.email}
                        ref="fieldEmail" />
                    <button className="btn btn-primary"
                        onClick={this.onSubmit}>Submit</button>
                </div>
            </div>
        );
    }
}

export default LeadCapture;
