import compression from 'compression';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

let app = express();

// Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    // Always remember to call the next middleware in the pipeline
    next();
});

// Middleware
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var ROOT_DIR = __dirname;
var STATIC_DIR = path.join(ROOT_DIR, 'public');

// Serve our static stuff like index.css
app.use(express.static(STATIC_DIR));

var ingredients = {};
var ingredientIDs = [];
var ingredientNames = {};

var gotDuplicate = function(ingredient) {
    return (ingredients[ingredient.id] || ingredientNames[ingredient.text]);
}

var shouldInsert = function(ingredient) {
    return (ingredient.id && ingredient.text && (! gotDuplicate(ingredient)));
}

var insertIngredient = function(ingredient) {
    if (shouldInsert(ingredient)) {
        ingredients[ingredient.id] = ingredient.text;
        ingredientIDs.push(ingredient.id);
        ingredientNames[ingredient.text] = true;

        return true;
    }

    return false;
}

var deleteIngredient = function(ingredientID) {
    if (ingredients[ingredientID]) {
        const ingredientName = ingredients[ingredientID];

        delete ingredients[ingredientID];

        ingredientIDs = ingredientIDs.filter(function(value) {
            return (value != ingredientID);
        });

        if (ingredientNames[ingredientName]) {
            delete ingredientNames[ingredientName];
        }

        return true;
    }

    return false;
}

var ingredientIDToIngredient = function(ingredientID) {
    if (ingredients[ingredientID]) {
        return {
            id: ingredientID,
            text: ingredients[ingredientID]
        };
    }
}

var getIngredients = function() {
    return ingredientIDs.map(ingredientIDToIngredient);
}

insertIngredient({ "id": "ak38", "text": "Egg" });
insertIngredient({ "id": "akH8", "text": "Broccoli" });
insertIngredient({ "id": "gk38", "text": "Bacon" });
insertIngredient({ "id": "a638", "text": "Spinach" });

app.get('/ingredients', function(req, res) {
    console.log(getIngredients());
    res.send(getIngredients());
});

app.post('/ingredients', function(req, res) {
    var ingredient = req.body;

    console.log(req.headers);
    console.log(req.body);

    const insertStatus = insertIngredient(ingredient);

    res.status(200).send({ inserted: insertStatus });
});

app.post('/ingredients/delete', function(req, res) {
    var ingredientID = req.body.id;

    console.log(req.headers);
    console.log(req.body);

    const deleteStatus = deleteIngredient(ingredientID);

    res.status(200).send({ deleteStatus: deleteStatus });
});

// Send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
    res.sendFile(path.join(STATIC_DIR, 'index.html'));
});

app.listen(6969);