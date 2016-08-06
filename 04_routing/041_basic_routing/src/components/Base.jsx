var React = require('react');

var Base = React.createClass({
    render: function() {
        return (
            <div className="base-container">
                <h1>Header</h1>
                {this.props.children}
                <h1>Footer</h1>
            </div>
        );
    }
});

module.exports = Base;
