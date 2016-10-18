'use strict';
const path = require('path');
const commonConfig = require('./webpack.common.config.js');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env) {
  return webpackMerge(commonConfig(), {
    entry: {
      'app.jit': './app/bootstrap.jit.ts',
      polyfills: [
        path.resolve(__dirname, 'node_modules/es6-shim/es6-shim.min.js'),
        path.resolve(__dirname, 'node_modules/es6-promise/dist/es6-promise.min.js'),
        path.resolve(__dirname, 'node_modules/reflect-metadata/Reflect.js'),
        path.resolve(__dirname, 'node_modules/zone.js/dist/zone.min.js'),
        path.resolve(__dirname, 'node_modules/zone.js/dist/long-stack-trace-zone.min.js')
      ]
    },
    output: {
      path: './dist/jit'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.jit.html',
        inject: false
      })
    ],
    devServer: {
      contentBase: 'dist/jit'
    }
  });
};
