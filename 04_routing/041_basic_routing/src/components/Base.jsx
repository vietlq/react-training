var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Base = React.createClass({
    render: function() {
        return (
            <div className="base-container">
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">
                                <span className="glyphicon glyphicon-music"></span>
                            </a>
                        </div>

                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li>
                                    <Link to={{ pathname: '/' }}>Home</Link>
                                </li>
                                <li>
                                    <Link to={{ pathname: '/lists' }}>All Lists</Link>
                                </li>
                                <li>
                                    <Link to={{ pathname: '/list/todo' }}>To-do List</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {this.props.children}

                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">
                                <span className="glyphicon glyphicon-music"></span>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
});

module.exports = Base;
