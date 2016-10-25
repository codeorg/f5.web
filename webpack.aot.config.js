'use strict';
const path = require('path');
var webpack = require('webpack');
const commonConfig = require('./webpack.common.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const DashboardPlugin = require('webpack-dashboard/plugin');
const CompressionPlugin = require("compression-webpack-plugin");


module.exports = function() {
  return {
    debug: false,
    profile: true,
    bail: false,
    entry: {
      'app.aot': './app/bootstrap.aot.ts',
      'ngx': './app/ngx.ts',
      'ng': './app/ng.ts',
      "polyfills":'./app/polyfills.ts'
    },
    output: {
      path: './dist/aot',
      filename: '[name].js',
      chunkFilename: '[id].chunk.js'
    },
    module: {
      loaders: [
        {
          test: /\.ts$/,
          loaders: [ 'awesome-typescript-loader','angular2-template-loader','angular2-load-children-loader'],
          //exclude: [/\.(spec|e2e)\.ts$/]
          exclude: /node_modules/
        },
        {
          test: /\.(html|css)$/,
          loader: 'raw-loader',
          exclude: ['app/index.html']
        }
      ]
    },

    resolve: {
      root: [ path.resolve(__dirname, 'app') ],
      extensions: ['', '.ts', '.js']
    },

    plugins: [
      new CopyWebpackPlugin([{
        from: path.resolve(__dirname, 'app/css'),
        to: path.resolve(__dirname, 'dist/aot/css'),
        force:true
      },{
        from: path.resolve(__dirname, 'app/fonts'),
        to: path.resolve(__dirname, 'dist/aot/fonts'),
        force:true
      },{
        from: path.resolve(__dirname, 'app/img'),
        to: path.resolve(__dirname, 'dist/aot/img'),
        force:true
      }]),
      new webpack.optimize.CommonsChunkPlugin({
        name: [ 'app.aot','ngx','ng','polyfills']
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        output: {
          comments: false
        },
        sourceMap: false
      }),
      new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      }),
      new HtmlWebpackPlugin({
        template: 'index.aot.html',
        inject: false
      })
    ],

    devtool: false,
    devServer: {
      contentBase: 'dist/aot',
      compress: true
    }
  };
}
