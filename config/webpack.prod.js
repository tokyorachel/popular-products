const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      sourceMap: true,
      extractComments: false
    })],
  },

  plugins: [
    new CleanWebpackPlugin(), // remove dist/ folder of previous build
    new CompressionPlugin() // gzip files
  ]
})