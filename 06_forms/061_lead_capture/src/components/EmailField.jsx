import React, { Component } from 'react';
import validator from 'email-validator';

class EmailField extends Component {
    constructor() {
        super();

        this.onChange = this.onChange.bind(this);

        this.state = {
            valid: true,
            value: ""
        };
    }

    onChange(event) {
        var val = event.target.value;

        if (validator.validate(val)) {
            this.setState({ valid: true, value: val });
        } else {
            this.setState({ valid: false, value: val });
        }
    }

    render() {
        var formClass = this.state.valid ? "form-group" : "form-group has-error"

        return (
            <div className={formClass}>
                <div className="input-group input-group-lg">
                    <span className="input-group-addon">@</span>
                    <input type="text" className="form-control"
                        placeholder="Email"
                        onChange={this.onChange}
                        value={this.state.value} />
                </div>
            </div>
        );
    }
}

export default EmailField;
