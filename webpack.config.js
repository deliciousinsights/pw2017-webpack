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
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1, sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')()],
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1, sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')()],
              sourceMap: true,
            },
          },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1, sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')()],
              sourceMap: true,
            },
          },
          { loader: 'stylus-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
  devtool: 'cheap-module-source-map',
}
