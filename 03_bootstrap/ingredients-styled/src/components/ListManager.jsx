var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
    // Calls only once when the component is created
    getInitialState: function() {
        return {items: [], newItemText: ''};
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
        return (
            <div className="col-sm-4 col-sm-offset-4">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-group">
                                <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
                                <span className="input-group-btn">
                                    <button className="btn btn-primary">Add</button>
                                </span>
                            </div>
                        </form>
                        <br/>
                        <List items={this.state.items} />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ListManager;
