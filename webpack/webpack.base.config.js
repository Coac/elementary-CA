const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'dist/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
  },
};
