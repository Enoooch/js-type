const path = require('path');
const UglifyESPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'commonjs2',
  },
  externals: /^(babel-runtime)/,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: path.resolve(__dirname, 'node_modules'),
      },
    ]
  },
  plugins: [
    new UglifyESPlugin({
      uglifyOptions: {
        compress: {
          warnings: false,
          drop_console: true,
          collapse_vars: true,
          reduce_vars: true,
        },
        output: {
          beautify: false,
          comments: false,
        }
      }
    })
  ],
  devtool: 'source-map',
};
