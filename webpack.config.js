const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    library: 'serverless-node-utils',
    path: path.join(__dirname, 'lib'),
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.DefinePlugin({ 'global.GENTLY': false })
  ]
}
