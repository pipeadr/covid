const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        clean: true
    },
    resolve: {
        extensions: [".js"]
    },
    mode: 'production',
    module: {
        rules: [
            {
                // Test declara que extensión de archivos aplicara el loader
                test: /\.js$/,
                exclude: /node_modules/, // IGNORA LOS MODULOS DE LA CARPETA
                // Use es un arreglo u objeto donde dices que loader aplicaras
                use: {
                  loader: "babel-loader"
                },
                // Exclude permite omitir archivos o carpetas especificas
              },
            //   {
            //     test: /\.html$/,
            //     use:  [
            //         {
            //             loader: 'html-loader'
            //         }
            //     ]
            //  },
              {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,
                    "css-loader",
                ],
              },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ // CONFIGURACIÓN DEL PLUGIN
            // inject: true,
            inject: 'body',
            template: './public/index.html', // LA RUTA AL TEMPLATE HTML
            filename: './index.html'// NOMBRE FINAL DEL ARCHIVO
        }),
        new MiniCssExtractPlugin({
            // filename: './moco.css'
            filename: 'assets/[name].[contenthash].css'
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
    },
}