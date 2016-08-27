var Fetcher = require('./OpenWeatherMapFetcher.jsx');
var Transformer = require('./OpenWeatherMapTransformer.jsx');

var OpenWeatherMapUtil = {
    getDailyForecastByCityId: function(input) {
        return Fetcher.getDailyForecastByCityId(input)
        .then(function (data) {
            return Transformer.transformDailyForecast(data);
        })
        .catch(function (error) {
            console.log('OpenWeatherMapUtil::getDailyForecastByCityId - Error: ' + error);
        });
    },
    getDailyForecastByCityName: function(input) {
        return Fetcher.getDailyForecastByCityName(input)
        .then(function (data) {
            return Transformer.transformDailyForecast(data);
        })
        .catch(function (error) {
            console.log('OpenWeatherMapUtil::getDailyForecastByCityName - Error: ' + error);
        });
    },
    getWeatherByCityId: function(input) {
        return Fetcher.getWeatherByCityId(input)
        .then(function (data) {
            return Transformer.transformWeather(data);
        })
        .catch(function (error) {
            console.log('OpenWeatherMapUtil::getWeatherByCityId - Error: ' + error);
        });
    },
    getWeatherByCityName: function(input) {
        return Fetcher.getWeatherByCityName(input)
        .then(function (data) {
            return Transformer.transformWeather(data);
        })
        .catch(function (error) {
            console.log('OpenWeatherMapUtil::getWeatherByCityName - Error: ' + error);
        });
    }
}

module.exports = OpenWeatherMapUtil;
