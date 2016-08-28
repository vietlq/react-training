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

var ingredients = [{
    "id": "ak38",
    "text": "Egg"
}, {
    "id": "akH8",
    "text": "Broccoli"
}, {
    "id": "gk38",
    "text": "Bacon"
}, {
    "id": "a638",
    "text": "Spinach"
}];

app.get('/ingredients', function (req, res) {
    res.send(ingredients);
});

app.post('/ingredients', function (req, res) {
    var ingredient = req.body;
    console.log(req.body);
    ingredients.push(ingredient);
    res.status(200).send("Successfully posted ingredient");
});

// Send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
    res.sendFile(_path2.default.join(STATIC_DIR, 'index.html'));
});

app.listen(6969);
