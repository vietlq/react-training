var React = require('react');
var NewsItem = require('./NewsItem.jsx');

var Photos = React.createClass({
    render: function() {
        let newsItemDetails = {
            title: 'Brexit Hits U.K. Housing as Property Sales Drop Most Since 2008',
            subtitle: 'Brexit is undermining the near-term outlook for the U.K. housing market, with both demand and sales dropping in July',
            body: 'Brexit is undermining the near-term outlook for the U.K. housing market, with both demand and sales dropping in July, according to the Royal Institution of Chartered Surveyors.\nThe London-based group said new buyer inquiries fell for a fourth month, while its index of sales is pointing to the fastest decline in transactions since the global financial crisis in 2008. Prices continued to rise, but at the slowest pace in three years. Just 5 percent more surveyors recorded an increase than a fall, compared with 15 percent in June.\nBritain’s vote to leave the European Union has undermined confidence among U.K. consumers and increased worries about their finances and property values. That’s curbing demand for housing, though a worsening supply picture is proving some support to prices, according to RICS. New sales listings are falling at a record pace, it said.',
            source: 'London, UK'
        };

        return (
            <div className="news-container">
                <NewsItem newsItemDetails={newsItemDetails} />
                <NewsItem newsItemDetails={newsItemDetails} />
                <NewsItem newsItemDetails={newsItemDetails} />
                <NewsItem newsItemDetails={newsItemDetails} />
                <NewsItem newsItemDetails={newsItemDetails} />
                <NewsItem newsItemDetails={newsItemDetails} />
            </div>
        );
    }
});

module.exports = Photos;
