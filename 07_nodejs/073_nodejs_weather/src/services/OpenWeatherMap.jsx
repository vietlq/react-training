require('es6-promise').polyfill();
import axios from 'axios';

var BASE_URL = 'http://api.openweathermap.org/data/2.5';
var GROUP_URL = BASE_URL + '/group';
var WEATHER_URL = BASE_URL + '/weather';
var FORECAST_URL = BASE_URL + '/forecast';
var DAILY_FORECAST_URL = FORECAST_URL + '/daily';

var makeForecastParams = function(input) {
    var params = {};

    params.appid = input.appId || 'INVALID';
    params.id = input.cityId || 524901; // Moscow
    params.cnt = input.days || 5; // Forecast 5 days
    params.units = input.units || 'metric'; // Metric units by default
    params.mode = 'json'; // We only use JSON format

    return params;
}

var OpenWeatherMap = {
    getDailyForecastByCityId: function(input) {
        var params = makeForecastParams(input);

        return axios.get(DAILY_FORECAST_URL, {
            params: params
        }).then(function (response) {
            return response.data;
        }).catch(function (error) {
            console.log('Error: ' + error);
        });
    }
}

module.exports = OpenWeatherMap;
