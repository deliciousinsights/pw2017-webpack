const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

exports.hmr = () => ({
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
})

exports.extractCSS = () => extractStyling({ ext: 'css' })
exports.extractSASS = () => extractStyling({ ext: 'scss', name: 'sass' })
exports.extractStylus = () => extractStyling({ ext: 'styl', name: 'stylus' })

exports.loadCSS = () => loadStyling({ ext: 'css' })
exports.loadSASS = () => loadStyling({ ext: 'scss', name: 'sass' })
exports.loadStylus = () => loadStyling({ ext: 'styl', name: 'stylus' })

// Fonctions d’assistance internes
// -------------------------------

function buildCSSLoaders({ ext, name = null, useStyle = false }) {
  const result = {
    test: new RegExp(`\\.${ext}$`),
    use: [
      { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
      {
        loader: 'postcss-loader',
        options: {
          plugins: loader => [require('autoprefixer')()],
          sourceMap: true,
        },
      },
    ],
  }

  if (name && name !== 'css') {
    result.use.push({
      loader: `${name}-loader`,
      options: { sourceMap: true },
    })
  }

  if (useStyle) {
    result.use.unshift('style-loader')
  }

  return result
}

let cssPlugin

function extractStyling({ ext, name }) {
  cssPlugin =
    cssPlugin ||
    new ExtractTextPlugin({
      filename: 'app.css',
      allChunks: true,
    })

  const { test, use } = buildCSSLoaders({ ext, name })

  return {
    plugins: [cssPlugin],
    module: {
      rules: [
        {
          test,
          use: cssPlugin.extract({
            fallback: 'style-loader',
            use,
          }),
        },
      ],
    },
  }
}

function loadStyling({ ext, name }) {
  return {
    module: {
      rules: [buildCSSLoaders({ ext, name, useStyle: true })],
    },
  }
}
