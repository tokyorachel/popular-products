const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
    new CopyWebpackPlugin([
      {
        from: 'images', // resolves to root/src/images 
        to: 'images' // copies all files from above dir to dist/images
      }
    ]),
    new CleanWebpackPlugin(), // remove dist/ folder of previous build
    new CompressionPlugin() // gzip files
  ]
})