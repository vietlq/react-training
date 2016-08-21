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

// Middleware
app.use((0, _compression2.default)());
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

var ROOT_DIR = __dirname;
var STATIC_DIR = _path2.default.join(ROOT_DIR, 'public');

// Serve our static stuff like index.css
app.use(_express2.default.static(STATIC_DIR));

var animals = ['cat', 'dog', 'Pokemon', 'Pikachu', 'devious turtle', 'bear', 'hippo', 'ox'];

var birds = ['Phoenix', 'Kungfu Crane', 'Eagle', 'Swallow', 'Swan'];

var secrets = ['Death Star', 'Treasure', 'Gold', 'Lost City'];

app.get('/animals', function (req, res) {
    res.send(animals);
});

app.get('/birds', function (req, res) {
    res.send(birds);
});

app.get('/secrets', function (req, res) {
    res.send(birds);
});

// Send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
    res.sendFile(_path2.default.join(STATIC_DIR, 'index.html'));
});

app.listen(6969);
