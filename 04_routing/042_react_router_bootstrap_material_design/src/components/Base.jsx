var React = require('react');
var Social = require('./Social.jsx')

var Base = React.createClass({
    render: function() {
        let social = this.props.route.social || {};

        return (
            <div className="page-base-outer-container">
                <div className="page-base-header-bg"></div>
                <div className="page-base-holder">
                    <div className="container">
                        <div className="page-base-header">
                            <h1>page-base-header</h1>
                            <Social social={social} />
                        </div>
                        <div className="page-base-body">
                            {this.props.children}
                        </div>
                    </div>
                    <nav className="navbar navbar-default navbar-fixed-bottom">
                        <div className="page-base-footer">
                            <h1>page-base-footer</h1>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
});

module.exports = Base;
