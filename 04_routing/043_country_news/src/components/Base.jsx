var React = require('react');

var Base = React.createClass({
    render: function() {
        return (
            <div className="page-base-holder">
                <div className="page-base-header">
                </div>
                <div className="page-base-body">
                    {this.props.children}
                </div>
                <div className="page-base-footer">
                </div>
            </div>
        );
    }
});

module.exports = Base;
