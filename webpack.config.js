const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        path:  path.join(__dirname, 'src'),
    },
    output: {
        path:  path.join(__dirname, 'demo'),
        filename: 'bundle.js'
    },
    module: {
        rules:  [
            {
                test: /\.js$/,
                loader: 'babel-loader?presets[]=es2015'
            }
        ]
    },
};