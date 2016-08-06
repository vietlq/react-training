var React = require('react');
var ListManager = require('./ListManager.jsx');

var ShowList = React.createClass({
    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-sm-offset-4">
                        <ListManager title="To Do" />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ShowList;
