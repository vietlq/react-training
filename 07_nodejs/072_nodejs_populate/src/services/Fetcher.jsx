import axios from 'axios';

var Fetcher = {
    get: function(url) {
        return axios.get(url)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log('Error: ' + error);
        });
    }
}

module.exports = Fetcher;
