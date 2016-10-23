const path = require('path');
const DashboardPlugin = require('webpack-dashboard/plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry: {"lib":'./app/lib/fingerprint2.js'},
    output: {
        path: './dist/jit',
        filename: 'lib.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            Fingerprint2: 'Fingerprint2',
            "window.Fingerprint2": "Fingerprint2"
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
        })
    ],
};