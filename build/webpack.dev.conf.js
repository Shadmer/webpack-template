const webpack = require('webpack');
const {merge} = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    /*Чтобы не ломался liveReload*/
    target: 'web',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: baseWebpackConfig.externals.paths.dist,
        overlay: {
            warnings: true,
            errors: true
        },
        port: 8081,
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: "[file].map"
        }),
    ],
});

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
});

