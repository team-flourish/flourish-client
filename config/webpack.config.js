const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(__dirname)

const ROOT_DIRECTORY = path.join(__dirname, '../');
const PUBLIC_DIRECTORY = path.join(ROOT_DIRECTORY, 'public');

const config = {
    entry: [path.resolve(__dirname, '../src/index.js')],
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: 'bundle.[contenthash].js',
        publicPath: '/',
    },
    mode: 'development',
    resolve: {
        modules: [path.resolve('node_modules'), 'node_modules']
    },
    performance: {
        hints: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(PUBLIC_DIRECTORY, 'index.html')//,
            //favicon: path.join(PUBLIC_DIRECTORY, 'favicon.png')
        })
    ],
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif|pdf)$/,
                use: ['file-loader'],
            }
        ]
    }
};

module.exports = config;
