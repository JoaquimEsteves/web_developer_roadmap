const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: [
        './src/index.js'
    ],
    mode: "production",
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'index.html',
        port: 42069
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