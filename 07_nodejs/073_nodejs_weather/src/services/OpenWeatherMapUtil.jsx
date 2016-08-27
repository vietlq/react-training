var Fetcher = equire('./OpenWeatherMapFetcher.jsx');
var Transformer = require('./OpenWeatherMapTransformer.jsx');

var OpenWeatherMapUtil = {
    getDailyForecastByCityId: function(input) {
        return Fetcher.getDailyForecastByCityId(input)
        .then(function (data) {
            Transformer.transformDailyForecast(data);
        })
        .catch(function (error) {
            console.log('OpenWeatherMapUtil::getDailyForecastByCityId - Error: ' + error);
        });
    },
    getWeatherByCityId: function(input) {
        return Fetcher.getWeatherByCityId(input)
        .then(function (data) {
            Transformer.transformWeather(data);
        })
        .catch(function (error) {
            console.log('OpenWeatherMapUtil::getWeatherByCityId - Error: ' + error);
        });
    }
}

module.exports = OpenWeatherMapUtil;
