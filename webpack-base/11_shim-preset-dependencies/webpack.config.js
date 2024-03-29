const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: require.resolve('./src/index.js'),
        use: [
          {
            loader: 'imports-loader',
            options: {
              wrapper: 'window',
            },
          },
        ],
      },

      {
        test: require.resolve('./src/globals.js'),
        use: 'exports-loader?file,parse=helpers.parse',
      },
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      join: ['lodash', 'join'],
    }),
  ],
}
