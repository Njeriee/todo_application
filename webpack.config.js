const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    mode : 'development',
    entry : ['./src/main.js'],
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js',
        clean: true,
        assetModuleFilename: 'images/[name][ext]',
    },
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.s[ac]ss$/,
            use: ['style-loader','css-loader','sass-loader'] },
            {test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/,
             type:'asset/resource'},
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "../public/index.html",
        }),
        new miniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css",
        }),
        new VueLoaderPlugin()
      ],
}