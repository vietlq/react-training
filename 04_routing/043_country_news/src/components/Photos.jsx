var React = require('react');
var PhotoItem = require('./PhotoItem.jsx');
var NewsItem = require('./NewsItem.jsx');

var Photos = React.createClass({
    render: function() {
        const photoItemDetails = {
            logo: 'img/flickr-white-large-chiclet.png',
            thumbs: [
                {
                    small_url: 'img/colors.jpg',
                    large_url: 'img/colors.jpg',
                    alt_text: 'Colors',
                },
                {
                    small_url: 'img/herbs.jpg',
                    large_url: 'img/herbs.jpg',
                    alt_text: 'Herbs',
                },
                {
                    small_url: 'img/hot-air-balloons.jpg',
                    large_url: 'img/hot-air-balloons.jpg',
                    alt_text: 'Hot air ballons',
                },
                {
                    small_url: 'img/starfish.jpg',
                    large_url: 'img/starfish.jpg',
                    alt_text: 'Starfish',
                },
            ],
        };

        return (
            <div className="news-container">
                <PhotoItem photoItemDetails={photoItemDetails} />
                <PhotoItem photoItemDetails={photoItemDetails} />
            </div>
        );
    }
});

module.exports = Photos;
