var path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    TextInput: './src/atoms/textinput/index.js',
    Button: './src/atoms/button/index.js',
    SelectInput: './src/atoms/selectinput/index.js',
    TextAreaInput: './src/atoms/textareainput/index.js',
    MultiSelectInput: './src/atoms/multiselectinput/index.js',
    FormUtils: './src/utils/FormUtils.js'
  },
  output: {
    path: path.resolve(__dirname, './'),
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
