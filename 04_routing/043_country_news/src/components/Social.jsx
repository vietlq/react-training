var React = require('react');

var Social = React.createClass({
    getInitialState: function() {
        return {
            social: {
                twitter: null,
                facebook: null,
                instagram: null,
                linkedin: null,
                email: null,
            }
        }
    },
    createItem: function(item, index) {
        let className = "fa " + item.css;

        return (
            <li key={index + item.url}>
                <a href={item.url}><i className={className}></i></a>
            </li>
        );
    },
    render: function() {
        let social = this.props.social || {};
        let socialItems = [];

        if (social.twitter) {
            socialItems.push({
                css: 'fa-twitter-square',
                url: 'https://twitter.com/' + social.twitter
            });
        }

        if (social.facebook) {
            socialItems.push({
                css: 'fa-facebook-official',
                url: 'https://facebook.com/' + social.facebook
            });
        }

        if (social.instagram) {
            socialItems.push({
                css: 'fa-instagram',
                url: 'https://instagram.com/' + social.instagram
            });
        }

        if (social.linkedin) {
            socialItems.push({
                css: 'fa-linkedin-square',
                url: 'https://linkedin.com/' + social.linkedin
            });
        }

        if (social.email) {
            socialItems.push({
                css: 'fa-envelope',
                url: 'mailto:' + social.email
            });
        }

        return (
            <div className="social-items-holder">
                <ul className="social-items">{socialItems.map(this.createItem)}</ul>
                <div className="social-items-clear"></div>
            </div>
        );
    }
})

module.exports = Social;
