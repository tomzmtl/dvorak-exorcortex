module.exports = {

  entry: ['./src/app'],
  output: {
    filename: 'dist/js/bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          {
             // creates style nodes from JS strings
            loader: 'style-loader',
          },
          {
             // translates CSS into CommonJS
            loader: 'css-loader?url=false',
          },
          {
             // compiles Sass to CSS
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },

};
