var React = require('react');
var ReactDOM = require('react-dom');
var RegularStats = require('./components/RegularStats.jsx');
var HeadingStats = require('./components/HeadingStats.jsx');
var WeatherStats = require('./components/WeatherStats.jsx');
var ListShotStats = require('./components/ListShotStats.jsx');

ReactDOM.render(<RegularStats figure="20"
    description="New followers added this month" />,
    document.getElementById('dashboard-regular-stats'));

ReactDOM.render(<HeadingStats figure="1.5k"
    description="New visitors" />,
    document.getElementById('dashboard-heading-stats'));

ReactDOM.render(<WeatherStats figure="20"
    description="London" />,
    document.getElementById('dashboard-weather-stats'));

var listShotStatsItems = [
    { views: 120453, likes: 18318, comments: 4919 },
    { views: 42522, likes: 34153, comments: 6622, bgColor: "#cd59ae" },
];

ReactDOM.render(<ListShotStats items={listShotStatsItems} />,
    document.getElementById('dashboard-shot-stats'));
