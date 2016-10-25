'use strict';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = function() {
  return {
    debug: false,
    profile: true,
    bail: false,
    entry: {
      'app.jit': './app/bootstrap.jit.ts',
      "polyfills":'./app/polyfills.ts'
    },

    output: {
      path: './dist/jit',
      filename: '[name].js',
      chunkFilename: '[id].chunk.js'
    },

    module: {
      loaders: [
        {
          test: /\.ts$/,
          loaders: ['angular2-template-loader', 'awesome-typescript-loader'],
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
      new HtmlWebpackPlugin({
        template: 'index.jit.html',
        inject: false
      })
    ],
    devtool: false,
    devServer: {
      contentBase: 'dist/jit',
      compress: true
    }

  };
}
