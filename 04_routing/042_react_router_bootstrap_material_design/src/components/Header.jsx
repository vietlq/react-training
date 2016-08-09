var React = require('react');
var ReactRouter = require('react-router');
var Social = require('./Social.jsx')

var Header = React.createClass({
    render: function() {
        let headerDetails = this.props.headerDetails;
        let social = headerDetails.social || {};

        return (
            <div className="page-base-header">
                <div className="row">
                    <div className="page-header-title col-sm-8">
                        <h1>{headerDetails.title}</h1>
                        <h4>{headerDetails.subtitle}</h4>
                    </div>
                    <div className="page-header-social col-sm-4">
                        <Social social={social} />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Header;
