var React = require('react');

var NewsItem = React.createClass({
    render: function() {
        let newsItemDetails = this.props.newsItemDetails || {};

        return (
            <div className="news-item">
                <div className="col-sm-12">
                    <div className="well">
                        <div className="container">
                            <div className="col-sm-2 news-item-logo">
                                <img src="/img/Twitter_Logo_White_On_Blue.png" />
                            </div>
                            <div className="col-sm-8">
                                <h3>{newsItemDetails.title}</h3>
                                <h4>{newsItemDetails.subtitle}</h4>
                                <div className="news-item-body">{newsItemDetails.body}</div>
                                <h5 className="news-item-source">{newsItemDetails.source}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = NewsItem;
