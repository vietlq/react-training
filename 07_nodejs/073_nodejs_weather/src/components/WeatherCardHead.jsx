var React = require('react');
var ListItem = require('./ListItem.jsx');

var WeatherCardHead = React.createClass({
    render: function() {
        var createItem = function(text, index) {
            return <ListItem key={index + text} text={text} />;
        };

        return (<ul className="list-group weather-card-list">{this.props.items.map(createItem)}</ul>);
    }
});

module.exports = WeatherCardHead;
