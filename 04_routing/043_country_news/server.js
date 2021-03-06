// https://github.com/reactjs/react-router-tutorial/tree/master/lessons/11-productionish-server

var compression = require('compression');
var express = require('express');
var path = require('path');

var app = express();

app.use(compression());

var ROOT_DIR = __dirname;
var STATIC_DIR = path.join(ROOT_DIR, 'public');

// Serve our static stuff like index.css
app.use(express.static(STATIC_DIR));

// Send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
    res.sendFile(path.join(STATIC_DIR, 'index.html'));
});

var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log('Production Express server running at localhost:' + PORT)
});
