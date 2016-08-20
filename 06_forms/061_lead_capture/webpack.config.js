var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var APP_DIR = path.resolve(ROOT_PATH, 'src');
var BUILD_DIR = path.resolve(ROOT_PATH, 'public/js');

// Add this handful of plugins that optimize the build when we're in production
var plugins = (process.env.NODE_ENV === 'production') ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
] : [];

var config = {
    entry: APP_DIR + '/main.jsx',

    output: {
        path: BUILD_DIR,
        filename: 'main.js'
    },

    module : {
        loaders : [
            {
                test : /\.jsx?$/,
                include : APP_DIR,
                loader : 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            }
        ]
    },

    plugins: plugins,
};

module.exports = config;
