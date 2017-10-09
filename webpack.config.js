const path = require('path')
const webpack = require('webpack')

const PATHS = {
  app: path.join(__dirname, 'src'),
  target: path.join(__dirname, 'build'),
}

module.exports = {
  devServer: {
    contentBase: PATHS.target,
    hot: true,
    overlay: true,
  },
  entry: PATHS.app,
  output: {
    path: PATHS.target,
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: 'cheap-module-source-map',
}
