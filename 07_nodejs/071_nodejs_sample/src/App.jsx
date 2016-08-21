import express from 'express';
import bodyParser from 'body-parser';

let app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const animals = [
    'cat', 'dog', 'pokemon', 'pikachu', 'devious turtle',
]

const birds = [
    'Phoenix', 'Kungfu Crane', 'Eagle', 'Swallow',
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

app.get('/*', function(req, res) {
    res.send(secrets);
});

app.listen(6969);
