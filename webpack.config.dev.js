const path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/client/index.js'
  ],
  output: {
    path: './public',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js'],
    root: [
      path.resolve('./src/client')
    ]
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [
            'react',
            'es2015',
            'stage-2',
          ],
          plugins: [
            'transform-regenerator'
          ]
        },
      },
    ],
  },
};
