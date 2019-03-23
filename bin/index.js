#!/usr/bin/env node

const webpack = require('webpack');
const cwd = process.cwd();
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const compiler = webpack({
    mode: "development",
    entry: './source/app.js',
    context: cwd,
    output: {
        filename: 'bundle.js',
        path: path.resolve(cwd, 'dist')
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: [
                '..',
                // {
                //     loader: 'babel-loader',
                //     options: {
                //         presets: [require('@babel/preset-react')],
                //         plugins: [
                //             [
                //                 require('@babel/plugin-proposal-class-properties'),
                //                 { loose: true }
                //             ],
                //             require('@babel/plugin-proposal-object-rest-spread')
                //         ]
                //     }
                // }
            ]
        }, {

        }]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
});

compiler.run((err, stats) => {
    if (err) {
        console.error(err);
    }
    if (stats.hasErrors && stats.compilation.errors.length !== 0) {
        console.log(stats.compilation.errors);
    }
});