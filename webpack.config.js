
const path = require('path');

module.exports = {
    watch: true,
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "public"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, // file yang akhiran js atau jsx
                include: path.resolve(__dirname, './src'),
                exclude: /node_modules/, //jangan proses
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: {
                    loader: 'file-loader'
                }
            }
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 3000,
        open: 'google-chrome'
    }
}