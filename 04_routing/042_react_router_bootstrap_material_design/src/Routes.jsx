var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var createHashHistory = require('history/lib/createHashHistory');
var cleanHashHistory = ReactRouter.useRouterHistory(createHashHistory)({ queryKey: false });

var Base = require('./components/Base.jsx');
var Test = require('./components/Test.jsx');

var Routes = (
    <Router history={cleanHashHistory}>
        <Route path="/" component={Base}>
            <Route path="/test" component={Test} />
        </Route>
    </Router>
);

module.exports = Routes;
