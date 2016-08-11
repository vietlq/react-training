import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { browserHistory } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';
var cleanHashHistory = useRouterHistory(createHashHistory)({ queryKey: false });

var Base = require('./components/Base.jsx');
var News = require('./components/News.jsx');
var Photos = require('./components/Photos.jsx');

var social = {
    twitter: 'vietlq',
    facebook: 'vietlq85',
    instagram: 'vietlq',
};

var headerDetails = {
    title: 'VietExpat News',
    subtitle: 'Top News for Vietnamese Expats',
    social: social
}

var Routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Base} headerDetails={headerDetails}>
            <IndexRoute component={News} />
            <Route path="/news" component={News} />
            <Route path="/photos" component={Photos} />
        </Route>
    </Router>
);

module.exports = Routes;
