const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  // before tree-shaking
  // mode: 'development',
  // optimization: {
  //   usedExports: true,
  // },

  // after tree-shaking
  mode: 'production',

  entry: './src/index.js',

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {},

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'tree-shaking',
    }),
  ],
}
