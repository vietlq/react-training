import React, { Component } from 'react';

class ResultField extends Component {
    constructor() {
        super();

        this.state = {
            value: ""
        };
    }

    render() {
        const textAlign = this.props.align || "right";
        const fieldStyle = {
            textAlign: textAlign
        };

        return (
            <div className="result-field">
                <input type="text" className="form-control"
                    readOnly="readonly" placeholder="Result goes here"
                    style={fieldStyle} value={this.state.value} />
            </div>
        );
    }
}

export default ResultField;
