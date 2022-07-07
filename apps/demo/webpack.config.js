'use strict';

const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const baseConfig = {
  mode: 'development',
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      '@demo/components': path.resolve(
        __dirname,
        '../../packages/components/src/index.ts',
      ),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              exclude: /node_modules/,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  node: {
    global: true,
  },
};

const webpackConfig = Object.assign({}, baseConfig, {
  entry: {
    app: path.join(__dirname, 'src', 'main.tsx'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new ForkTsCheckerWebpackPlugin(),
  ],
});

module.exports = webpackConfig;
