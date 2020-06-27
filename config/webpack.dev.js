const merge = require('webpack-merge')
const path = require('path')
const baseConfig = require('./webpack.base.js')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 9001
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:9001/react-hooks-demo' }),
  ]
})