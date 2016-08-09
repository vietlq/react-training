var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Social = require('./Social.jsx')

var Header = React.createClass({
    render: function() {
        let headerDetails = this.props.headerDetails;
        let social = headerDetails.social || {};

        return (
            <div className="page-base-header">
                <div className="page-header-title col-sm-8">
                    <h1>{headerDetails.title}</h1>
                    <h4>{headerDetails.subtitle}</h4>
                </div>

                <div className="page-header-social col-sm-4">
                    <Social social={social} />
                </div>
                <div className="custom-clear-div"></div>

                <div className="page-header-social col-sm-12">
                    <div className="header-nav-menu">
                        <ul>
                            <li><Link to="/news" activeClassName="active">News</Link></li>
                            <li><Link to="/photos" activeClassName="active">Photos</Link></li>
                        </ul>
                        <div className="custom-clear-div"></div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Header;
