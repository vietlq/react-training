import React, { Component } from 'react';

class NumberField extends Component {
    constructor() {
        super();

        this.onChange = this.onChange.bind(this);

        this.state = {
            // To keep placeholder shown
            value: undefined
        };
    }

    onChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div className="number-field">
                <input type="number" className="form-control"
                    placeholder={this.props.placeholder || ""}
                    value={this.state.value} onChange={this.onChange} />
            </div>
        );
    }
}

export default NumberField;
