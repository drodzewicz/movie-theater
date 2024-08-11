import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import ReactRefreshTypeScript from "react-refresh-typescript";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

const config: webpack.Configuration = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
    clean: true,
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
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
    port: 3000,
    open: true,
    hot: true,
  },
};

export default config;
