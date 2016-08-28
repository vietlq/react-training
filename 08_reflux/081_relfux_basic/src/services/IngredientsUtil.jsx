require('es6-promise').polyfill();
import axios from 'axios';

var normalizeSvcCfg = function(svcCfg) {
    svcCfg = svcCfg || {};
    svcCfg.baseUrl = svcCfg.baseUrl || '';

    return svcCfg;
}

var IngredientsUtil = {
    getAllIngredients: function(svcCfg) {
        const newSvcCfg = normalizeSvcCfg(svcCfg);
        const URL = newSvcCfg.baseUrl + '/ingredients';
        return axios.get(URL)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log('IngredientsUtil::getAllIngredients - Error: ' + error);
        });
    },
    postIngredient: function(ingredient, svcCfg) {
        const newSvcCfg = normalizeSvcCfg(svcCfg);
        const URL = newSvcCfg.baseUrl + '/ingredients';
        console.log(ingredient);
        return axios(URL, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(ingredient)
        })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log('IngredientsUtil::postIngredient - Error: ' + error);
        });
    }
}

module.exports = IngredientsUtil;
