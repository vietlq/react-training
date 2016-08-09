var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var Route = ReactRouter.Route;
var createHashHistory = require('history/lib/createHashHistory');
var cleanHashHistory = ReactRouter.useRouterHistory(createHashHistory)({ queryKey: false });

var Base = require('./components/Base.jsx');
var Test = require('./components/Test.jsx');

var social = {
    twitter: 'vietlq',
    facebook: 'vietlq85',
    instagram: 'vietlq',
};

var headerDetails = {
    title: 'VietExpat News',
    subtitle: 'Top News About Vietnamese Expats',
    social: social
}

var Routes = (
    <Router history={cleanHashHistory}>
        <Route path="/" component={Base} headerDetails={headerDetails}>
            <IndexRoute component={Test} />
            <Route path="/news" component={Test} />
            <Route path="/photos" component={Test} />
        </Route>
    </Router>
);

module.exports = Routes;
