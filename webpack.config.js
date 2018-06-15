var path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    textinput: './src/atoms/textinput/index.js',
    button: './src/atoms/button/index.js',
    selectinput: './src/atoms/selectinput/index.js',
    textareainput: './src/atoms/textareainput/index.js',
    multiselectinput: './src/atoms/multiselectinput/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    libraryTarget: 'commonjs2',
    library: 'someLibName'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      }
    ]
  }
}
