var React = require('react');
var List = require('./List.jsx');
var Fetcher = require('../services/Fetcher.jsx');
require('es6-promise').polyfill();
import axios from 'axios';

var ListManager = React.createClass({
    // Calls only once when the component is created
    getInitialState: function() {
        return {items: [], newItemText: ''};
    },
    componentWillMount: function() {
        console.log(this.props.dataUrl);
        // Unable to call .bind(this) due to return type of Fetcher.get
        var theOwner = this;

        Fetcher.get(this.props.dataUrl)
        .then(function (data) {
            theOwner.setState({items: data, newItemText: ''});
        })
        .catch(function (error) {
            console.log('Error: ' + error);
        });

        /*
        // Another way to do it
        axios.get(this.props.dataUrl)
        .then(function (response) {
            theOwner.setState({items: response.data, newItemText: ''});
        })
        .catch(function (error) {
            console.log('Error: ' + error);
        });
        //*/
    },
    onChange: function(e) {
        // e in this case is the input text field being changed
        this.setState({newItemText: e.target.value});
    },
    handleSubmit: function(e) {
        // Prevent the default submission event
        e.preventDefault();
        // We handle submission ourselves
        var currentItems = this.state.items;
        currentItems.push(this.state.newItemText);
        // Update the state, clear newItemText after insertion
        this.setState({items: currentItems, newItemText: ''});
    },
    render: function() {
        var divPanelStyle = {
            marginTop: 10
        };

        var headingStyle = {

        };

        if (this.props.headingColor) {
            headingStyle.background = this.props.headingColor;
        }

        return (
            <div style={divPanelStyle} className="panel panel-primary">
                <div style={headingStyle} className="panel-heading">
                    <h3>{this.props.title}</h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <input className="form-control"
                                onChange={this.onChange}
                                value={this.state.newItemText} />
                            <span className="input-group-btn">
                                <button className="btn btn-primary">Add</button>
                            </span>
                        </div>
                    </form>
                    <br/>
                    <List items={this.state.items} />
                </div>
            </div>
        );
    }
});

module.exports = ListManager;
