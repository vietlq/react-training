var React = require('react');

var ListItem = React.createClass({
    render: function() {
        return (
            <li className="list-group-item">
                <span>{this.props.text}</span>
            </li>
        );
    }
});

module.exports = ListItem;
