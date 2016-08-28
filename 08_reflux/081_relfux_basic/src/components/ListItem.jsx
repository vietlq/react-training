var React = require('react');

var ListItem = React.createClass({
    render: function() {
        const itemDetails = this.props.itemDetails;
        return (
            <li className="list-group-item">{itemDetails.text}</li>
        );
    }
});

module.exports = ListItem;
