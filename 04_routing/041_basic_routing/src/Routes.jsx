var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;

var Base = require('./components/Base.jsx');
var ShowList = require('./components/ShowList.jsx');
var ShowLists = require('./components/ShowLists.jsx');

var Routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Base}>
            <Route path="/lists" component={ShowLists} />
            <Route path="/list/:listId" component={ShowList} />
        </Route>
    </Router>
);

module.exports = Routes;
