var React = require('react');

var PhotoItem = React.createClass({
    render: function() {
        let photoItemDetails = this.props.photoItemDetails || {};

        return (
            <div className="news-item">
                <div className="col-sm-12">
                    <div className="well">
                        <div className="row news-item-main">
                            <div className="col-sm-2 news-item-logo">
                                <img src="/img/Twitter_Logo_White_On_Blue.png" />
                            </div>
                            <div className="col-sm-10">
                                <h3>{photoItemDetails.title}</h3>
                                <h4>{photoItemDetails.subtitle}</h4>
                                <div className="news-item-body">{photoItemDetails.body}</div>
                                <h5 className="news-item-source">{photoItemDetails.source}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = PhotoItem;
