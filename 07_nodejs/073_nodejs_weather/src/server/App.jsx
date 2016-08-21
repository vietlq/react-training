import compression from 'compression';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

let app = express();

// Middleware
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var ROOT_DIR = __dirname;
var STATIC_DIR = path.join(ROOT_DIR, 'public');

// Serve our static stuff like index.css
app.use(express.static(STATIC_DIR));

const animals = [
    'cat', 'dog', 'Pokemon', 'Pikachu', 'devious turtle', 'bear', 'hippo', 'ox',
]

const birds = [
    'Phoenix', 'Kungfu Crane', 'Eagle', 'Swallow', 'Swan',
]

const secrets = [
    'Death Star', 'Treasure', 'Gold', 'Lost City',
]

app.get('/animals', function(req, res) {
    res.send(animals);
});

app.get('/birds', function(req, res) {
    res.send(birds);
});

app.get('/secrets', function(req, res) {
    res.send(secrets);
});

// Send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
    res.sendFile(path.join(STATIC_DIR, 'index.html'));
});

app.listen(6969);