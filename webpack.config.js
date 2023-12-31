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
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },


    devServer: {
        hot: true,
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
            // JS/JSX
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/env','@babel/preset-react'],
                        cacheDirectory: true,
                    }
                }
            },
            // HTML
            { 
                test: /\.(html)$/, 
                use: [
                    "html-loader"
                ]
            },
            // CSS/SCSS
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            }
            
        ],
    }
}

