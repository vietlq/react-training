var React = require('react');
var ReactDOM = require('react-dom');
var LeftBar = require('./components/LeftBar.jsx');
var RightBar = require('./components/RightBar.jsx');

var performanceStats = {
    newFollowers: 2519,
    avgMonthlyIncome: "$ 42820",
    yearlyIncomeGoal: "$ 502189",
};

var listShotStatsItems = [
    { views: 120453, likes: 18318, comments: 4919 },
    { views: 42522, likes: 34153, comments: 6622, bgColor: "#cd59ae" },
];

ReactDOM.render(<LeftBar performanceStats={performanceStats}
    listShotStatsItems={listShotStatsItems} />,
    document.getElementById('dashboard-performance-stats'));

var trafficStats = {
    newVisitors: 1500,
    bounceRate: '34%',
    searches: '28%',
    outBandwidth: '1.27GB',
};

var weatherStats = {
    temperature: 20,
    location: "London"
};

ReactDOM.render(<RightBar weatherStats={weatherStats} trafficStats={trafficStats} />,
    document.getElementById('dashboard-right-bar-stats'));
