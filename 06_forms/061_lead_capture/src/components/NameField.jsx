import React, { Component } from 'react';

class NameField extends Component {
    constructor() {
        super();

        this.onChange = this.onChange.bind(this);

        this.state = {
            valid: true,
            value: ""
        };
    }

    onChange(event) {
        const val = event.target.value;

        if (val.trim().length > 0) {
            this.setState({ valid: true, value: val });
        } else {
            this.setState({ valid: false, value: val });
        }
    }

    render() {
        const formClass =
            this.state.valid ? "form-group" : "form-group has-error";

        return (
            <div className={formClass}>
                <div className="input-group input-group-lg">
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-user"></span>
                    </span>
                    <input type="text" className="form-control"
                        placeholder={this.props.nameType + " Name"}
                        onChange={this.onChange}
                        value={this.state.value} />
                </div>
            </div>
        );
    }
}

export default NameField;
