import React, { Component } from 'react';

class OperationButton extends Component {
    render() {
        const opBtnStyle = {
            width: "100%"
        };
        const btnType = this.props.btnType || "primary";
        const btnStyle = "btn btn-" + btnType;

        return (
            <div className="operation-button">
                <button className={btnStyle}
                    style={opBtnStyle}>{this.props.text}</button>
            </div>
        );
    }
}

export default OperationButton;
