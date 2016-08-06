var React = require('react');
var ReactDOM = require('react-dom');
var PerformanceStats = require('./components/PerformanceStats.jsx');
var TrafficStats = require('./components/TrafficStats.jsx');
var WeatherStats = require('./components/WeatherStats.jsx');
var ListShotStats = require('./components/ListShotStats.jsx');

var performanceStats = {
    newFollowers: 2519,
    avgMonthlyIncome: "$ 42820",
    yearlyIncomeGoal: "$ 502189",
};

ReactDOM.render(<PerformanceStats newFollowers={performanceStats.newFollowers}
    avgMonthlyIncome={performanceStats.avgMonthlyIncome}
    yearlyIncomeGoal={performanceStats.yearlyIncomeGoal} />,
    document.getElementById('dashboard-performance-stats'));

var listShotStatsItems = [
    { views: 120453, likes: 18318, comments: 4919 },
    { views: 42522, likes: 34153, comments: 6622, bgColor: "#cd59ae" },
];

ReactDOM.render(<ListShotStats items={listShotStatsItems} />,
    document.getElementById('dashboard-shot-stats'));

var trafficStats = {
    newVisitors: 1500,
    bounceRate: '34%',
    searches: '28%',
    outBandwidth: '1.27GB',
};

ReactDOM.render(<TrafficStats newVisitors={trafficStats.newVisitors}
    bounceRate={trafficStats.bounceRate} searches={trafficStats.searches}
    outBandwidth={trafficStats.outBandwidth} />,
    document.getElementById('dashboard-heading-stats'));

ReactDOM.render(<WeatherStats figure="20"
    description="London" />,
    document.getElementById('dashboard-weather-stats'));
