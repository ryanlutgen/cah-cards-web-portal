var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var pJson = require('./package.json');
// var firstRun = true;

// function folderExists(folderPath) {
//     try {
//         fs.accessSync(folderPath, fs.F_OK);
//         return true;
//     } catch (e) {
//         return false;
//     }
// }

module.exports = {
    entry: './app/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'app.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        // new HtmlWebpackPlugin({
        //     filename: './index.html',
        //     template: 'index-dev.html',
        //     inject: 'head',
        //     hash: true
        // }),
        function() {
            //once compilation is done
            this.plugin("done", function() {
                var currDate = new Date();
                console.log("Compilation timestamp: " + currDate.getHours() % 12 + ":" + currDate.getMinutes() + ":" + currDate.getSeconds());
            });
        }
    ],
    module: {
        // preLoaders: [
        //     {
        //         test: /\.js$/,
        //         include: /app/,
        //         loader: 'eslint-loader'
        //     }
        // ],
        loaders: [
            {
                test: /\.js$/,
                include: /app/,
                loader: 'babel-loader'
            },
            // {
            //     test: /\.html$/,
            //     exclude: /node_modules/,
            //     loader: 'raw-loader'
            // },
            // {
            //     test: /\.scss$/,
            //     exclude: /(node_modules)/,
            //     loader: "style-loader!css-loader!sass-loader"
            // },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpg|ttf|eot|svg|woff2?)$/,
                loader: "url-loader?limit=10000"
            }
        ]
    },
    resolve: {
        extensions: ['', '.js']
    }
};