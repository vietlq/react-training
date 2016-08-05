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
            <div class="list-manager">
                <h3>{this.props.title}</h3>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.onChange} value={this.state.newItemText} />
                    <button>Add</button>
                </form>
                <List items={this.state.items} />
            </div>
        );
    }
});

module.exports = ListManager;
