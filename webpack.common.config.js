'use strict';
const path = require('path');
const DashboardPlugin = require('webpack-dashboard/plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const webpack = require('webpack');

module.exports = function() {
  return {

    debug: false,
    profile: true,
    bail: false,

    entry: {
      "polyfills":'./app/polyfills.ts'
    },

    output: {

      filename: '[name].js',
      chunkFilename: '[id].chunk.js'
    },

    module: {
      loaders: [
        {
          test: /\.ts$/,
          loaders: ['angular2-template-loader', 'awesome-typescript-loader','angular2-router-loader'],
          exclude: [/\.(spec|e2e)\.ts$/]
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

    ],

    devtool: false,

    devServer: {
      compress: true
    }

  };
}
