var webpack = require('webpack');

const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },
    //   resolve: {
    //       alias: {
    //           jquery: "./src/js/jquery.js"
    //       }
    //   },
    // module: {
    //     loaders: [
    //         // Fix error 'JQuery is not defined' if any
    //         {
    //             test: require.resolve("jquery"),
    //             loader: "expose-loader?$!expose-loader?jQuery"
    //         },
    //     ]
    // },
    plugins: [
        new MergeIntoSingleFilePlugin({
          "bundle.js": [
            path.resolve(__dirname, './src/js/ajaxchimp.js'),
            path.resolve(__dirname, './src/js/bootstrap.js'),
            path.resolve(__dirname, './src/js/jquery.js'),
            path.resolve(__dirname, './src/js/main.js'),
            path.resolve(__dirname, './src/js/nicescroll.js'),
            path.resolve(__dirname, './src/js/owl.carousel.min.js'),
            path.resolve(__dirname, './src/js/parallax.js'),
            path.resolve(__dirname, './src/js/scrollTo.js'),
            path.resolve(__dirname, './src/js/wow.js'),
            
          ]
        //   "bundle.css": [
        //     path.resolve(__dirname, 'src/css/main.css'),
        //     path.resolve(__dirname, 'src/css/local.css')
        //   ]
        })
      ]
};