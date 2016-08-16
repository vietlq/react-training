var React = require('react');
import Thumbnail from './Thumbnail.jsx';

var PhotoItem = React.createClass({
    render: function() {
        const photoItemDetails = this.props.photoItemDetails || { logo: '', thumbs : [] };
        var createThumbnail = function(thumb, index) {
            return (<Thumbnail key={thumb.small_url + index} thumb={thumb} />);
        };

        return (
            <div className="news-item">
                <div className="col-sm-12">
                    <div className="well">
                        <div className="row news-item-main">
                            <div className="col-sm-2 news-item-logo">
                                <img src={photoItemDetails.logo} />
                            </div>
                            <div className="col-sm-10">
                                <div className="thumbnail-holder">
                                    {photoItemDetails.thumbs.map(createThumbnail)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = PhotoItem;
