var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot','babel'],
      include: path.join(__dirname, 'src')
    },{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style','css!sass')
    },
    { test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    },
    { test: /\.json$/, loader: 'json-loader' }],
    noParse: /node_modules\/json-schema\/lib\/validate\.js/
  },plugins: [
      new ExtractTextPlugin('style.css', {
          allChunks: true
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['','.webpack.js', '.web.js', '.js', '.jsx']
  },
  node: {
    console : true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
