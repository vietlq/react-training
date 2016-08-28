require('es6-promise').polyfill();
import axios from 'axios';

var normalizeInput = function(input) {
    input = input || {};
    input.baseUrl = input.baseUrl || '';

    return input;
}

var IngredientsUtil = {
    getAllIngredients: function(input) {
        const normalizedInput = normalizeInput(input);
        const URL = normalizedInput.baseUrl + '/ingredients';
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
