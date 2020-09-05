const path = require('path');
module.exports = {
  entry: path.join(__dirname, "js/main"),
  output: {
    path: path.join(__dirname, 'build'),
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
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  },
  devtool: 'source-map',
  devServer: {
    port: 8000,
    publicPath: '/build/'
  },
}