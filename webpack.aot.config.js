'use strict';
var webpack = require('webpack');
const commonConfig = require('./webpack.common.config.js');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env) {
  return webpackMerge(commonConfig(), {
    entry: {
      'app.aot': './app/bootstrap.aot.ts',
      'vendor': './app/vendor.ts',
      "polyfills":'./app/polyfills.ts'
    },
    output: {
      path: './dist/aot'
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: [ 'app.aot','vendor','polyfills']
      }),
      new HtmlWebpackPlugin({
        template: 'index.aot.html',
        inject: false
      })
    ],
    devServer: {
      contentBase: 'dist/aot'
    },
    bail: true
  });
};
