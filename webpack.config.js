module.exports = {
  mode: 'development',
  entry: __dirname + '/client/index.js',
  output: {
    path: __dirname + '/public/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: __dirname + '/node_modules',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-react', { runtime: 'automatic'}], '@babel/preset-env'],
              plugins: ['babel-plugin-styled-components']
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx']
  }
};