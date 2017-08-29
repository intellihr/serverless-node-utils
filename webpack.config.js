const path = require('path')

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
    library: 'js-utils',
    path: path.join(__dirname, 'lib'),
    filename: 'js-utils.js',
    libraryTarget: 'umd'
  }
}
