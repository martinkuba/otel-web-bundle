const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'otel-bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './test',
    hot: true,
  },
  mode: 'development',
  // mode: 'production',
};
