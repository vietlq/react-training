var React = require('react');

var generateSocialItems = function(social) {
    let socialItems = [];
    let cssPrefix = "fa fa-";
    let mappings = {
        twitter: {
            css: 'twitter-square',
            url: 'https://twitter.com/'
        },
        facebook: {
            css: 'facebook-official',
            url: 'https://facebook.com/'
        },
        instagram: {
            css: 'instagram',
            url: 'https://instagram.com/'
        },
        linkedin: {
            css: 'linkedin-square',
            url: 'https://linkedin.com/'
        },
        email: {
            css: 'envelope',
            url: 'mailto:'
        },
    };

    Object.keys(mappings).forEach(function (val, index, array) {
        if (social[val]) {
            socialItems.push({
                css: (cssPrefix + mappings[val].css),
                url: (mappings[val].url + social[val])
            });
        }
    });

    return socialItems;
};

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

        return (
            <div className="social-items-holder">
                <ul className="social-items">
                    {generateSocialItems(social).map(this.createItem)}
                </ul>
                <div className="social-items-clear"></div>
            </div>
        );
    }
});

module.exports = Social;
