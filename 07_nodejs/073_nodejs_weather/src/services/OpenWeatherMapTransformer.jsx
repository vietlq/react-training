var moment = require('moment');

////////////////////////////////////////////////////////////////

const SOURCE_ICON_TO_WI_DATA = {
    "01d": {
        desc: "Clear Sky",
        wiCode: "wi-day-sunny",
        mode: "DAY",
    },
    "01n": {
        desc: "Clear Sky",
        wiCode: "wi-night-clear",
        mode: "NIGHT",
    },
    "02d": {
        desc: "Few Clouds",
        wiCode: "wi-day-cloudy",
        mode: "DAY",
    },
    "02n": {
        desc: "Few Clouds",
        wiCode: "wi-night-partly-cloudy",
        mode: "NIGHT",
    },
    "03d": {
        desc: "Scattered Clouds",
        wiCode: "wi-day-cloudy",
        mode: "DAY",
    },
    "03n": {
        desc: "Scattered Clouds",
        wiCode: "wi-night-alt-cloudy",
        mode: "NIGHT",
    },
    "04d": {
        desc: "Broken Clouds",
        wiCode: "wi-day-cloudy",
        mode: "DAY",
    },
    "04n": {
        desc: "Broken Clouds",
        wiCode: "wi-night-alt-cloudy",
        mode: "NIGHT",
    },
    "09d": {
        desc: "Shower Rain",
        wiCode: "wi-day-showers",
        mode: "DAY",
    },
    "09n": {
        desc: "Shower Rain",
        wiCode: "wi-night-alt-showers",
        mode: "NIGHT",
    },
    "10d": {
        desc: "Rain",
        wiCode: "wi-day-rain",
        mode: "DAY",
    },
    "10n": {
        desc: "Rain",
        wiCode: "wi-night-alt-rain",
        mode: "NIGHT",
    },
    "11d": {
        desc: "Thunderstorm",
        wiCode: "wi-day-thunderstorm",
        mode: "DAY",
    },
    "11n": {
        desc: "Thunderstorm",
        wiCode: "wi-night-alt-thunderstorm",
        mode: "NIGHT",
    },
    "13d": {
        desc: "Snow",
        wiCode: "wi-day-snow",
        mode: "DAY",
    },
    "13n": {
        desc: "Snow",
        wiCode: "wi-night-alt-snow",
        mode: "NIGHT",
    },
    "13d": {
        desc: "Mist",
        wiCode: "wi-day-fog",
        mode: "DAY",
    },
    "13n": {
        desc: "Mist",
        wiCode: "wi-night-fog",
        mode: "NIGHT",
    },
};

////////////////////////////////////////////////////////////////

var getWindDirStyle = function(windDir) {
    return ("wi wi-wind towards-" + windDir + "-deg");
}

var sourceIconToWIData = function(sourceIcon) {
    return SOURCE_ICON_TO_WI_DATA[sourceIcon] || {
        desc: "Sky Fall",
        wiCode: "wi-alien",
        mode: "Chaos",
    };
}

var extractForecastData = function(forecast) {
    if (! forecast.dt) {
        return {
            date: '',
            minTemp: -999,
            maxTemp: -999,
            simpleAvgTemp: -999,
            windDir: 999,
            windSpeed: -1,
            iconStyle: "wi wi-alien",
        };
    }

    var date = new Date(parseInt(forecast.dt) * 1000);
    var theMoment = moment(date.toISOString());

    return {
        date: theMoment.format('MMMM DD'),
        minTemp: parseInt(forecast.temp.min),
        maxTemp: parseInt(forecast.temp.max),
        simpleAvgTemp: ((parseInt(forecast.temp.min) + parseInt(forecast.temp.max)) / 2),
        windDir: forecast.deg,
        windSpeed: Math.round(parseFloat(forecast.speed)*10)/10,
        iconStyle: ("wi " + sourceIconToWIData(forecast.weather[0].icon).wiCode),
        windDirStyle: getWindDirStyle(forecast.deg),
    };
}

////////////////////////////////////////////////////////////////

var OpenWeatherMapTransformer = {
    transformDailyForecast(data) {
        var dailyForecast = data.list.map(extractForecastData);

        return {
            city: data.city.name + ', ' + data.city.country,
            dailyForecast: dailyForecast
        };
    },
    transformWeather(data) {
        return {};
    }
}

module.exports = OpenWeatherMapTransformer;
