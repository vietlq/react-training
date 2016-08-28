import Reflux, { createStore } from 'reflux';
import Actions from './Actions.jsx';
import IngredientsUtil from '../services/IngredientsUtil.jsx';

var IngredientsStore = createStore({
    listenables: [Actions],
    getIngredients: function() {

    },
    postIngredients: function(text) {
        // Posted ingredient to the server now we got a successful callback
        //this.trigger('change', this.ingredients);
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
