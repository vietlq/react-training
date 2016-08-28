var React = require('react');

var ListItem = React.createClass({
    onListItemDelete: function(event) {
        // Prevent form submission
        event.preventDefault();

        this.props.onListItemDelete(event, this.props.itemDetails.id);
    },

    render: function() {
        const itemDetails = this.props.itemDetails;
        return (
            <li className="list-group-item list-item-custom">
                {itemDetails.text}
                <span className="badge"><a href="javascript:void();"
                    onClick={this.onListItemDelete}>X</a></span>
            </li>
        );
    }
});

module.exports = ListItem;
