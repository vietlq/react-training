var React = require('react');
var Header = require('./Header.jsx')

var Base = React.createClass({
    render: function() {
        let headerDetails = this.props.route.headerDetails || {};

        return (
            <div className="page-base-outer-container">
                <div className="page-base-header-bg"></div>
                <div className="page-base-holder">
                    <div className="container">
                        <Header headerDetails={headerDetails} />
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
