const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['@babel/polyfill', path.resolve(__dirname, '../src/index.tsx')],
  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        loader: 'babel-loader',
        // 开启缓存
        options: { cacheDirectory: true },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'static/assets/images/[name].[hash].[ext]'
            },
          },
        ],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '页面生成平台',
      template: path.resolve(__dirname, '../public/index.html')
    })
  ]
}
