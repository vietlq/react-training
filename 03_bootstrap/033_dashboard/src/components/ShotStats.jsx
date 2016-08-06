var React = require('react');
var RegularStats = require('./RegularStats.jsx');

var ShotStats = React.createClass({
    getInitialState: function() {
        return {
            views: 0,
            likes: 0,
            comments: 0,
            textColor: '#ffffff',
            bgColor: '#0096d0'
        };
    },
    render: function() {
        var headerStyle = {
            color: '#ffffff',
            background: '#0096d0'
        };

        if (this.props.textColor) {
            headerStyle.color = this.props.textColor;
        }

        if (this.props.bgColor) {
            headerStyle.background = this.props.bgColor;
        }

        return (
            <div className="panel panel-default">
                <div style={headerStyle} className="panel-heading shots-stats-heading">
                </div>
                <div className="panel-footer shots-stats-footer">
                    <div className="row">
                        <div className="col-xs-4">
                            <span className="stats-figure">{this.props.views}</span><br/>
                            <span className="stats-description">Shot Views</span>
                        </div>
                        <div className="col-xs-4">
                            <span className="stats-figure">{this.props.likes}</span><br/>
                            <span className="stats-description">Likes</span>
                        </div>
                        <div className="col-xs-4">
                            <span className="stats-figure">{this.props.comments}</span><br/>
                            <span className="stats-description">Comments</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ShotStats;
