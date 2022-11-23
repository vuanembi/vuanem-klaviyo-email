const fs = require('fs');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        watchFiles: ['src/*'],
        hot: true,
        open: false,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
    plugins: fs
        .readdirSync('./src')
        .filter((filename) => filename.match(/.*\.html/))
        .map((filename) => new HtmlWebpackPlugin({ filename, template: `./src/${filename}` })),
};
