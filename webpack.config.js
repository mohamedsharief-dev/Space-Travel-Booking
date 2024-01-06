const { watch } = require('fs');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    bundle: './src/index.js',
    bundleLogin: './src/login.js',
    bundleSpline: './src/spline.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  watch: true
};