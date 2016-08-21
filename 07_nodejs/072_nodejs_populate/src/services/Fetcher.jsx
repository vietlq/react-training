import axios from 'axios';

var Fetcher = {
    setBaseUrl: function(baseUrl) {
        this.baseUrl = baseUrl;
    },
    get: function(url) {
        return axios.get(this.baseUrl + url)
        .then(function (response) {
            console.log('Response: ' + response);
            return response.json();
        })
        .catch(function (error) {
            console.log('Error: ' + error);
        });
    }
}

export default Fetcher;
