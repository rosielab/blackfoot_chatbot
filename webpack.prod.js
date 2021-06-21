var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const definePlugin = new webpack.DefinePlugin({
  WEBGL_RENDERER: true,
  CANVAS_RENDERER: false,
});

module.exports = {
  entry: {
    index: ['babel-polyfill', path.resolve(__dirname, 'src/index.js')],
    vendor: ['phaser'],
  },
  mode: 'production',
  output: {
    pathinfo: true,
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  plugins: [
    definePlugin,
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.html',
      chunks: ['vendor', 'index'],
      chunksSortMode: 'manual',
      hash: false,
    }),
    new BrowserSyncPlugin({
      host: process.env.IP || 'localhost',
      port: process.env.PORT || 3000,
      server: {
        baseDir: './build',
      },
    }),
      new CopyWebpackPlugin(
      {
        patterns: [
          {
            from: path.resolve(__dirname, 'src/assets'),
            to: path.resolve(__dirname, 'build/assets')
          }
        ]
      }
    ),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, 'src'),
        enforce: 'pre',
        use: 'source-map-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src'),
      },
      { test: [/\.vert$/, /\.frag$/], use: 'raw-loader' },
    ],
  },
};