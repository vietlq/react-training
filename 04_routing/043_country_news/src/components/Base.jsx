var React = require('react');

var Base = React.createClass({
    render: function() {
        return (
            <div className="page-base-outer-container">
                <div className="page-base-header-bg">
                </div>
                <div className="container page-base-holder">
                    <div className="page-base-header">
                    </div>
                    <div className="page-base-body">
                        {this.props.children}
                    </div>
                    <div className="page-base-footer">
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Base;
