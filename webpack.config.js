const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './index.html',
    filename: 'index.html',
    inject: 'body'
});

let config = {
    devtool: 'source-map',
    entry: './src/js/app.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js',
        sourceMapFilename: '[file].map'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}

module.exports = config;
