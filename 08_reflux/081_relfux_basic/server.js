'use strict';

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// Allow all requests from all domains & localhost
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    // Always remember to call the next middleware in the pipeline
    next();
});

// Middleware
app.use((0, _compression2.default)());
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

var ROOT_DIR = __dirname;
var STATIC_DIR = _path2.default.join(ROOT_DIR, 'public');

// Serve our static stuff like index.css
app.use(_express2.default.static(STATIC_DIR));

var ingredients = {};
var ingredientIDs = [];
var ingredientNames = {};

var gotDuplicate = function gotDuplicate(ingredient) {
    return ingredients[ingredient.id] || ingredientNames[ingredient.text];
};

var shouldInsert = function shouldInsert(ingredient) {
    return ingredient.id && ingredient.text && !gotDuplicate(ingredient);
};

var insertIngredient = function insertIngredient(ingredient) {
    if (shouldInsert(ingredient)) {
        ingredients[ingredient.id] = ingredient.text;
        ingredientIDs.push(ingredient.id);
        ingredientNames[ingredient.text] = true;

        return true;
    }

    return false;
};

var deleteIngredient = function deleteIngredient(ingredientID) {
    if (ingredients[ingredientID]) {
        var ingredientName = ingredients[ingredientID];

        delete ingredients[ingredientID];

        ingredientIDs = ingredientIDs.filter(function (value) {
            return value != ingredientID;
        });

        if (ingredientNames[ingredientName]) {
            delete ingredientNames[ingredientName];
        }

        return true;
    }

    return false;
};

var ingredientIDToIngredient = function ingredientIDToIngredient(ingredientID) {
    if (ingredients[ingredientID]) {
        return {
            id: ingredientID,
            text: ingredients[ingredientID]
        };
    }
};

var getIngredients = function getIngredients() {
    return ingredientIDs.map(ingredientIDToIngredient);
};

insertIngredient({ "id": "ak38", "text": "Egg" });
insertIngredient({ "id": "akH8", "text": "Broccoli" });
insertIngredient({ "id": "gk38", "text": "Bacon" });
insertIngredient({ "id": "a638", "text": "Spinach" });

app.get('/ingredients', function (req, res) {
    console.log(getIngredients());
    res.send(getIngredients());
});

app.post('/ingredients', function (req, res) {
    var ingredient = req.body;

    console.log(req.headers);
    console.log(req.body);

    var insertStatus = insertIngredient(ingredient);

    res.status(200).send({ inserted: insertStatus });
});

app.post('/ingredients/delete', function (req, res) {
    var ingredientID = req.body.id;

    console.log(req.headers);
    console.log(req.body);

    var deleteStatus = deleteIngredient(ingredientID);

    res.status(200).send({ deleteStatus: deleteStatus });
});

// Send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
    res.sendFile(_path2.default.join(STATIC_DIR, 'index.html'));
});

app.listen(6969);
