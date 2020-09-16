const path = require('path');
module.exports = {
  entry: path.join(__dirname, 'webpack/entry'),
  output: {
    path: path.join(__dirname, 'assets/javascripts'),
    filename: "bundle.js"
  },
  mode: 'development', // TODO: 'production'
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: [['env', {
            targets: {
              browsers: ['> 1%', 'last 2 major versions'],
            },
            loose: true,
            modules: false,
          }]],
        }
      },
    ]
  }
}