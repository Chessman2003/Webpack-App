const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


let mode = "development";
if(process.env.NODE_ENV === "production") {
    mode = "production";
};


const plugins = [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
    }),
];

module.exports = {
    mode,
    plugins,
    entry: "./src/index.js",
    devtool: "source-map",
    output: {
        path: path.resolve(_dirname, "dist"),
        clean: true,
    },


    devServer: {
        hot: true,
    },


    module: {
        rules: [
            { test: /\.(html)$/, use: ["html-loader"]},
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                    }
                }
            },
        ],
    }
}

