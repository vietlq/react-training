var React = require('react');

var HeadingStats = React.createClass({
    getInitialState: function() {
        return {
            description: '',
            figure: '',
            details: ''
        };
    },
    render: function() {
        var headingStyle = {
            color: '#FFFFFF',
            background: 'red'
        };

        if (this.props.textColor) {
            headingStyle.color = this.props.textColor;
        }

        if (this.props.headingColor) {
            headingStyle.background = this.props.headingColor;
        }

        return (
            <div className="panel panel-default">
                <div style={headingStyle} className="panel-heading">
                    <span className="stats-description">{this.props.description}</span><br/>
                    <span className="stats-figure">{this.props.figure}</span>
                </div>
                <div className="panel-body">
                    <span className="stats-details">{this.props.details}</span>
                </div>
            </div>
        );
    }
});

module.exports = HeadingStats;
