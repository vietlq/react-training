var React = require('react');

var RegularStats = React.createClass({
    render: function() {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <span className="stats-figure">{this.props.figure}</span><br/>
                    <span className="stats-description">{this.props.description}</span>
                </div>
            </div>
        );
    }
});

module.exports = RegularStats;
