'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// Middleware
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

var animals = ['cat', 'dog', 'Pokemon', 'Pikachu', 'devious turtle', 'bear', 'hippo', 'ox'];

var birds = ['Phoenix', 'Kungfu Crane', 'Eagle', 'Swallow', 'Swan'];

var secrets = ['Death Star', 'Treasure', 'Gold', 'Lost City'];

app.get('/animals', function (req, res) {
    res.send(animals);
});

app.get('/birds', function (req, res) {
    res.send(birds);
});

app.get('/*', function (req, res) {
    res.send(secrets);
});

app.listen(6969);
