module.exports = {
  entry: './client',
  output: {
    filename: 'bundle.js',
    path: './dist/'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.js$/,
      loader: 'babel',
      exclude: /(node_modules)/
    }, {
      test: /\.json$/,
      loader: 'json'
    }]
  },
  node: {
    fs: 'empty'
  }
}
