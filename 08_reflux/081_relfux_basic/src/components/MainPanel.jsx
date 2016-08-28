import React, { Component } from 'react';
import List from './List.jsx';
import IngredientsUtil from '../services/IngredientsUtil.jsx';
import Reflux from 'reflux';
import Actions from '../reflux/Actions.jsx';
import IngredientsStore from '../reflux/IngredientsStore.jsx';

var MainPanel = React.createClass({
    mixins: [Reflux.listenTo(IngredientsStore, 'onChange')],

    getInitialState: function() {
        return { ingredients: [] };
    },

    componentWillMount: function() {
        Actions.getIngredients();
    },

    onChange: function(event, ingredients) {
        this.setState({ ingredients: ingredients });
    },

    onFormSubmitted: function(event) {
        // Prevent form submission
        event.preventDefault();

        var ingredients = this.state.ingredients;
        const newItem = {
            text: this.refs.fieldInput.value
        }
        ingredients.push(newItem);
        this.setState({ ingredients: ingredients });
        this.refs.fieldInput.value = '';
    },

    render: function() {
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
});

export default MainPanel;
