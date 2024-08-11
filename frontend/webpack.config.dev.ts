import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import ReactRefreshTypeScript from "react-refresh-typescript";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

const config: webpack.Configuration = {
    entry: path.resolve(__dirname, "src", "main", "index.tsx"),
    output: {
        filename: "bundle.[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        clean: true,
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
            },
            {
                test: /\.tsx?$/,
                exclude: "/node_modules/",
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            getCustomTransformers: () => ({
                                before: [ReactRefreshTypeScript()],
                            }),
                        },
                    },
                ],
            },
        ],
    },
    devtool: "inline-source-map",
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public", "index.html") }),
        new ReactRefreshWebpackPlugin(),
    ],
    devServer: {
        historyApiFallback: true,
        port: 3000,
        open: true,
        hot: true,
        proxy: {
            "/api": {
                target: "http://localhost:8080",
                changeOrigin: true,
            },
        },
    },
};

export default config;
