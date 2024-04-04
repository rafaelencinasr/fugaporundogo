const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    top10: './src/top10.js',
    agregarCarreta: './src/agregarCarreta.js',
    miPerfil: './src/miPerfil.js',
    carretas: './src/carretas.js',
    busqueda: './src/busqueda.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};