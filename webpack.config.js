const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    /*Чтобы не ломался liveReload*/
    target: 'web',
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: "/dist",
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: { sourceMap: true }
                    },
                    {
                        loader: "postcss-loader",
                        options: { sourceMap: true }
                    },
                    {
                        loader: "less-loader",
                        options: { sourceMap: true }
                    },
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: { sourceMap: true }
                    },
                    {
                        loader: "postcss-loader",
                        options: { sourceMap: true }
                    },
                ],
            },
        ]
    },
    devServer: {
        overlay: true
    },
};
