var React = require('react');

var Base = React.createClass({
    render: function() {
        return (
            <div className="page-base-outer-container">
                <div className="page-base-header-bg"></div>
                <div className="page-base-holder">
                    <div className="container">
                        <div className="page-base-header">
                            <h1>page-base-header</h1>
                            <i className="fa fa-facebook-official fa-1" aria-hidden="true"></i>
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
