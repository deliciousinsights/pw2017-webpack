const path = require('path')

const PATHS = {
  app: path.join(__dirname, 'src'),
  target: path.join(__dirname, 'build'),
}

module.exports = {
  entry: PATHS.app,
  output: {
    path: PATHS.target,
    filename: 'bundle.js',
  },
}
