
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var webpack = require('webpack');

module.exports ={
    entry: {
        'app': './app/main.ts',
        'vendor': './app/vendor.ts',
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html']
    },
    output: {
        path: __dirname+'/dist',
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    module:{
          rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loaders: [
                    'awesome-typescript-loader',
                    'angular2-template-loader',
                    'source-map-loader',
                    'tslint-loader'
                ]
          },
          {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=public/fonts/[name].[ext]'
            },
            {
                test: /\.css$/,
                loader: ["style-loader","css-loader"]
           },
          { 
              test: /\.html$/, 
              loader: "raw-loader" 
          }
          ],
            exprContextCritical: false
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
                name: ['vendor','app']
            }),
        new CleanWebpackPlugin(
                ['dist'], {
                root: __dirname,
                verbose: true, 
                dry: false,
                exclude: []
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            template: 'index.html'
        })
    ]
};