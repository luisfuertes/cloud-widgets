var path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    TextInput: './src/atoms/textinput/index.js',
    Button: './src/atoms/button/index.js',
    SelectInput: './src/atoms/selectinput/index.js',
    TextAreaInput: './src/atoms/textareainput/index.js',
    MultiSelectInput: './src/atoms/multiselectinput/index.js',
    Checkbox: './src/atoms/checkbox/index.js',
    FormUtils: './src/utils/FormUtils.js'
  },
  output: {
    path: path.resolve(__dirname, './lib'),
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

/*
var config = {
  // TODO: Add common Configuration
  mode: 'production',
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

var widgetsConfig = Object.assign({}, config, {
  name: 'Widgets',
  entry: {
    TextInput: './src/atoms/textinput/index.js',
    Button: './src/atoms/button/index.js',
    SelectInput: './src/atoms/selectinput/index.js',
    TextAreaInput: './src/atoms/textareainput/index.js',
    MultiSelectInput: './src/atoms/multiselectinput/index.js'
  },
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  }
})
var utilsConfig = Object.assign({}, config, {
  name: 'Utils',
  entry: './src/utils/FormUtils.js',
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  }
})

// Return Array of Configurations
module.exports = [widgetsConfig, utilsConfig]
*/
