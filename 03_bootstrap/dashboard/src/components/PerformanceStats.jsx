var React = require('react');
var RegularStats = require('./RegularStats.jsx');

var PerformanceStats = React.createClass({
    getInitialState: function() {
        return {
            newFollowers: 0,
            avgMonthlyIncome: 0,
            yearlyIncomeGoal: 0,
        };
    },
    render: function() {
        return (
            <div className="performance-stats">
                <div className="row">
                    <div className="col-sm-4">
                        <RegularStats figure={this.props.newFollowers}
                            description="New followers added this month" />
                    </div>
                    <div className="col-sm-4">
                        <RegularStats figure={this.props.avgMonthlyIncome}
                            description="Average Monthly Income" />
                    </div>
                    <div className="col-sm-4">
                        <RegularStats figure={this.props.yearlyIncomeGoal}
                            description="Yearly Income Goal" />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = PerformanceStats;
