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

var ingredients = [
    {
        "id": "ak38",
        "text": "Egg"
    },
    {
        "id": "akH8",
        "text": "Broccoli"
    },
    {
        "id": "gk38",
        "text": "Bacon"
    },
    {
        "id": "a638",
        "text": "Spinach"
    },
];

app.get('/ingredients', function(req, res) {
    res.send(ingredients);
});

app.post('/ingredients', function(req, res) {
    var ingredient = req.body;
    console.log(req.body);
    ingredients.push(ingredient);
    res.status(200).send("Successfully posted ingredient");
});

// Send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
    res.sendFile(path.join(STATIC_DIR, 'index.html'));
});

app.listen(6969);
