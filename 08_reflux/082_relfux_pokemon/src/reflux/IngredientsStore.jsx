import Reflux, { createStore } from 'reflux';
import Actions from './Actions.jsx';
import IngredientsUtil from '../services/IngredientsUtil.jsx';

var IngredientsStore = createStore({
    listenables: [Actions],
    getIngredients: function() {
        IngredientsUtil.getAllIngredients()
        .then(function(data) {
            this.ingredients = data;
            // Always remember to fire an update event
            this.fireUpdate();
        }.bind(this))
        .catch(function(error) {
            console.log('IngredientsStore::getIngredients - Error: ' + error);
        });
    },
    postIngredient: function(ingredientName) {
        // Posted ingredient to the server now we got a successful callback
        var ingredient = {
            text: ingredientName,
            id: Math.floor(Date.now() / 1000) + ingredientName
        };

        // We do local update first and based on server response, we will correct later
        // This is called optimistic update
        // Make sure it's an array
        this.ingredients = this.ingredients || [];
        this.ingredients.push(ingredient);
        this.fireUpdate();

        // Finally we send to the server and await actual data from the server
        // Send to the server and only fire an update when there was actual update
        IngredientsUtil.postIngredient(ingredient)
        .then(function(data) {
            // Rest easy and let the get method handle it
            this.getIngredients();
        }.bind(this))
        .catch(function(error) {
            console.log('IngredientsStore::postIngredient - Error: ' + error);
        });
    },
    deleteIngredient: function(ingredientID) {
        IngredientsUtil.deleteIngredient(ingredientID)
        .then(function(data) {
            // Rest easy and let the get method handle it
            this.getIngredients();
        }.bind(this))
        .catch(function(error) {
            console.log('IngredientsStore::deleteIngredient - Error: ' + error);
        });
    },
    fireUpdate: function() {
        this.trigger('change', this.ingredients);
    }
});

export default IngredientsStore;

/*
var TodoStore = createStore({

});

module.exports = {
    Ingredients: IngredientsStore,
    Todo: TodoStore
}
*/
