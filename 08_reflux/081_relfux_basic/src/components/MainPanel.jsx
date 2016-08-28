import React, { Component } from 'react';
import List from './List.jsx';
import IngredientsUtil from '../services/IngredientsUtil.jsx';
import axios from 'axios';

class MainPanel extends Component {
    constructor(props) {
        super(props);

        this.state = { ingredients: [] };

        this.onFormSubmitted = this.onFormSubmitted.bind(this);
    }

    componentWillMount() {
        IngredientsUtil.getAllIngredients({ baseUrl: this.props.baseUrl })
        .then(function(data) {
            this.setState({ ingredients: data });
        }.bind(this))
        .catch(function(error) {
            console.log('MainPanel::componentWillMount - Error: ' + error);
        });
    }

    onFormSubmitted(event) {
        // Prevent form submission
        event.preventDefault();

        var ingredients = this.state.ingredients;
        const newItem = {
            text: this.refs.fieldInput.value
        }
        ingredients.push(newItem);
        this.setState({ ingredients: ingredients });
        this.refs.fieldInput.value = '';
    }

    render() {
        return (
            <div className="main-panel">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            <form onSubmit={this.onFormSubmitted}>
                                <div className="input-group input-group-lg">
                                    <input type="text" className="form-control"
                                        ref="fieldInput" />
                                    <span className="input-group-btn">
                                        <button className="btn btn-primary">Add</button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            <List title={this.props.title}
                                items={this.state.ingredients} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPanel;
