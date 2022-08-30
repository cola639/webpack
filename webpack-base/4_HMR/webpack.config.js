const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',

  // webpack-dev-server HMR
  devtool: 'inline-source-map',
  devServer: {
    static: ['./dist'],
    hot: true,
    liveReload: true,
  },

  entry: { app: './src/index.js', print: './src/print.js' },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {},

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '管理输出',
    }),
  ],
}
