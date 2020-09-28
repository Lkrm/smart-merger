const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        path:   path.join(__dirname, 'src'),
    },
    module: {
        rules:  [
            {
                exclude: ['node_modules'],
                test: /\.js$/,
                loader: 'babel-loader?presets[]=es2015'
            }
        ]
    },
    watch: true,
};