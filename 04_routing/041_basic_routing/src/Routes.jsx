var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
// You can use hashHistory/browserHistory/cleanHashHistory
var hashHistory = ReactRouter.hashHistory;
var browserHistory = ReactRouter.browserHistory;
var createHashHistory = require('history/lib/createHashHistory');
var appHistory = ReactRouter.useRouterHistory(createHashHistory)({ queryKey: false });

var Base = require('./components/Base.jsx');
var ShowList = require('./components/ShowList.jsx');
var ShowLists = require('./components/ShowLists.jsx');

var Routes = (
    <Router history={appHistory}>
        <Route path="/" component={Base}>
            <Route path="/lists" component={ShowLists} />
            <Route path="/list" component={ShowList} />
            <Route path="/list/:listId" component={ShowList} />
        </Route>
    </Router>
);

module.exports = Routes;
