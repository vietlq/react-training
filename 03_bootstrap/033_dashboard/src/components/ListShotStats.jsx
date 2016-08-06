var React = require('react');
var ShotStats = require('./ShotStats.jsx');

var ListShotStats = React.createClass({
    render: function() {
        var createItem = function(item, index) {
            return <ShotStats key={index + item.views + item.likes + item.comments}
                views={item.views} likes={item.likes} comments={item.comments}
                textColor={item.textColor} bgColor={item.bgColor} />;
        };

        return (
            <div className="shots-stats-container">{this.props.items.map(createItem)}</div>
        );
    }
});

module.exports = ListShotStats;
