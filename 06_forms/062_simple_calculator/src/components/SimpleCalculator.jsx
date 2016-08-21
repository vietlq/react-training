import React, { Component } from 'react';
import NumberField from './NumberField.jsx';
import OperationButton from './OperationButton.jsx';
import ResultField from './ResultField.jsx';

class SimpleCalculator extends Component {
    constructor() {
        super();

        this.onClickAdd = this.onClickAdd.bind(this);
        this.onClickSubstract = this.onClickSubstract.bind(this);
        this.onClickMultiply = this.onClickMultiply.bind(this);
        this.onClickDivide = this.onClickDivide.bind(this);
        this.onClickClear = this.onClickClear.bind(this);
    }

    onClickAdd(event) {
        const newVal = parseInt(this.refs.fieldNum1.state.value)
            + parseInt(this.refs.fieldNum2.state.value);
        this.refs.fieldResult.setState({
            value: newVal
        });
    }

    onClickSubstract(event) {
        const newVal = parseInt(this.refs.fieldNum1.state.value)
            - parseInt(this.refs.fieldNum2.state.value);
        this.refs.fieldResult.setState({
            value: newVal
        });
    }

    onClickMultiply(event) {
        const newVal = parseInt(this.refs.fieldNum1.state.value)
            * parseInt(this.refs.fieldNum2.state.value);
        this.refs.fieldResult.setState({
            value: newVal
        });
    }

    onClickDivide(event) {
        const newVal = parseInt(this.refs.fieldNum1.state.value) / parseInt(this.refs.fieldNum2.state.value);
        this.refs.fieldResult.setState({
            value: newVal
        });
    }

    onClickClear(event) {
        this.refs.fieldNum1.setState({ value : '' });
        this.refs.fieldNum2.setState({ value : '' });
        this.refs.fieldResult.setState({ value : '' });
    }

    render() {
        const panelBodyStyle = {
            background: "#f5f5f5"
        };

        return (
            <div className="simple-calculator">
                <div className="panel panel-default">
                    <div className="panel-body" style={panelBodyStyle}>
                        <h2 style={{textAlign: "center"}}>Simple Calculator</h2>
                        <br/>
                        <div className="row">
                            <div className="col-sm-6">
                                <NumberField ref="fieldNum1"
                                    placeholder="Number e.g. 1234" />
                            </div>
                            <div className="col-sm-6">
                                <NumberField ref="fieldNum2"
                                    placeholder="Number e.g. 5678" />
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-sm-3">
                                <OperationButton text="+ Add"
                                    onClick={this.onClickAdd} />
                            </div>
                            <div className="col-sm-3">
                                <OperationButton text="- Substract"
                                    onClick={this.onClickSubstract} />
                            </div>
                            <div className="col-sm-3">
                                <OperationButton text="* Multiply"
                                    onClick={this.onClickMultiply} />
                            </div>
                            <div className="col-sm-3">
                                <OperationButton text="/ Divide"
                                    onClick={this.onClickDivide} />
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-sm-9">
                                <ResultField ref="fieldResult" />
                            </div>
                            <div className="col-sm-3">
                                <OperationButton text="Clear"
                                    onClick={this.onClickClear}
                                    btnType="danger" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SimpleCalculator;
