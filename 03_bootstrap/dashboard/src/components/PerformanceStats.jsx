var React = require('react');
var RegularStats = require('./RegularStats.jsx');

var PerformanceStats = React.createClass({
    getInitialState: function() {
        return {
            performanceStats: {
                newFollowers: 0,
                avgMonthlyIncome: 0,
                yearlyIncomeGoal: 0,
            }
        };
    },
    render: function() {
        let performanceStats = this.props.performanceStats;

        return (
            <div className="performance-stats">
                <div className="row">
                    <div className="col-sm-4">
                        <RegularStats figure={performanceStats.newFollowers}
                            description="New followers added this month" />
                    </div>
                    <div className="col-sm-4">
                        <RegularStats figure={performanceStats.avgMonthlyIncome}
                            description="Average Monthly Income" />
                    </div>
                    <div className="col-sm-4">
                        <RegularStats figure={performanceStats.yearlyIncomeGoal}
                            description="Yearly Income Goal" />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = PerformanceStats;
