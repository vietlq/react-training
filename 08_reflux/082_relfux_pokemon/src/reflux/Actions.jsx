import Reflux, { createActions } from 'reflux';

var Actions = createActions([
    'getIngredients',
    'postIngredient',
    'deleteIngredient'
]);

export default Actions;
