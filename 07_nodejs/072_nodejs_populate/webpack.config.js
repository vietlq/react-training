var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var SRC_DIR = path.resolve(ROOT_PATH, 'src');
var COMPO_DIR = path.resolve(SRC_DIR, 'components');
var SERVICES_DIR = path.resolve(SRC_DIR, 'services');
var APP_DIR = path.resolve(SRC_DIR, 'client');
var BUILD_DIR = path.resolve(ROOT_PATH, 'public/js');

var ForceProdEnv = new webpack.DefinePlugin({
    "process.env": { 
        NODE_ENV: JSON.stringify("production") 
    }
});

// Add this handful of plugins that optimize the build when we're in production
var plugins = (process.env.NODE_ENV === 'production') ? [
    ForceProdEnv,
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
                include : [APP_DIR, COMPO_DIR],
                loader : 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test : /\.jsx?$/,
                include : SERVICES_DIR,
                loader : 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },

    plugins: plugins,
};

module.exports = config;
