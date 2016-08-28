require('es6-promise').polyfill();
import axios from 'axios';

var IngredientsUtil = {
    getAllIngredients: function(input) {
        const URL = input.baseUrl + '/ingredients';
        return axios.get(URL)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log('IngredientsUtil::getAllIngredients - Error: ' + error);
        });
    }
}

module.exports = IngredientsUtil;
