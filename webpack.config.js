const path = require('path')
const webpack = require('webpack')

const config = {
  entry: path.join(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './public')
  },
  resolve: {
        extensions: [".js"] // if we were using React.js, we would include ".jsx"
  },
  module: {
        rules: [
            {
                test: /\.js$/, // if we were using React.js, we would use \.jsx?$/
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
  plugins: [
    new webpack.ProgressPlugin()
  ],
  devtool: 'source-map'
}

module.exports = config
