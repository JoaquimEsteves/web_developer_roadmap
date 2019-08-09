const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/static/'
    },
    module: {
        rules: [{
            test: /\.(.js|.jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }]
    },
    // resolve: {
    //     extensions: ['js', 'jsx']
    // },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'Webpack yo',
            description: 'Webpack yo',
            template: 'src/template.hbs'
        })
    ]
}