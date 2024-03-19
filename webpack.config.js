const path = require('path');
const DEV = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: DEV ? 'development' : 'production',
  entry: {
    environment_indicator_loft: './js/environment_indicator_loft.es6.js',
  },
  resolve: {
    modules: ['./js', './dist', 'node_modules'],
  },
  externals: {
    jquery: 'jQuery',
    drupal: 'Drupal',
  },
  devtool: DEV ? 'inline-source-map' : false,
  output: {
    path: path.resolve('./dist'),
    filename: '[name].min.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
