const path = require('path');

module.exports = {
  entry: __dirname + '/src/js/app.js',
  output: {
    path: __dirname + '/www/js',
    publicPath: '/www/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js'],
    root:[ path.resolve( __dirname, './src/js' ) ],
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel",
      query:{
        presets: ['es2015', 'react']
      }
    },
    {
      test: /\.css$/,
      loaders: ['style', 'css?modules'],
    }
    ]
  },
  postcss: [ ],
  plugins: [ ],
  externals: [ ]
}
