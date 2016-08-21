import React, { Component } from 'react';

class NumberField extends Component {
    render() {
        return (
            <div className="number-field">
                <input type="text" className="form-control"
                    placeholder={this.props.placeholder || ""} />
            </div>
        );
    }
}

export default NumberField;
