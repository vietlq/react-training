var React = require('react');
var ListManager = require('./ListManager.jsx');

var ShowLists = React.createClass({
    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <ListManager title="Ingredients" />
                    </div>
                    <div className="col-sm-4">
                        <ListManager title="To Do" />
                    </div>
                    <div className="col-sm-4">
                        <ListManager title="Christmas" headingColor="#EE2C2C" />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ShowLists;
