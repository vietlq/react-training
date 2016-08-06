var React = require('react');
var ListManager = require('./ListManager.jsx');

var lists = {
    todo: "To Do",
    ingredients: "Ingredients",
    xmas: "Christmas",
};

var ShowList = React.createClass({
    render: function() {
        let listName = lists[this.props.params.listId] || lists['todo'];

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-sm-offset-4">
                        <ListManager title={listName} />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ShowList;
