import Reflux, { createStore } from 'reflux';
import Actions from './Actions.jsx';
import IngredientsUtil from '../services/IngredientsUtil.jsx';

var IngredientsStore = createStore({
    listenables: [Actions],
    getIngredients: function() {
        IngredientsUtil.getAllIngredients({ baseUrl: 'http://localhost:6969' })
        .then(function(data) {
            this.ingredients = data;
            // Always remember to fire an update event
            this.fireUpdate();
        }.bind(this))
        .catch(function(error) {
            console.log('IngredientsStore::getIngredients - Error: ' + error);
        });
    },
    postIngredients: function(text) {
        // Posted ingredient to the server now we got a successful callback
        this.fireUpdate();
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
