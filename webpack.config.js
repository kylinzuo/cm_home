var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry:[
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'src/main.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: path.resolve(__dirname, '/build/')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: './index.html'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel?presets[]=es2015'],
        exclude: /node_modules/
      },
      { test: /\.css$/, loaders: ['style', 'css'] },
      // LESS
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },
      { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
      { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader" },
      { test: /\.eot$/,    loader: "file-loader" },
      {
        test: /\.html$/,
        loader: "raw-loader" // loaders: ['raw-loader'] is also perfectly acceptable.
      }
    ]
  },
  resolve: {
   extensions: ['', '.js', '.jxs', '.es6']
  }
}
