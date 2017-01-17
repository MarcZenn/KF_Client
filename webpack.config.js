var path = require('path');
var webpack = require('webpack');

module.exports = {
  // By default, Webpack is set up to target the browser,
  // not a Node environment. Try setting target in your config:
  target: 'web',
  // Having devtools option as `source-map` generates the source map files which helps to debug on development. You can simply tack on more loaders as needed.
  devtool: 'source-map',
  // First property references the entry file. Then specifies the output file as well as configuration for webpack hot reload of assets.
  entry: [
    'webpack-hot-middleware/client?path=http://localhost:9090/__webpack_hmr',
    // 'webpack-dev-server/client?http://127.0.0.1:9090/', // webpack-dev-server host and port. The 0.0.0.0 host lets the server listen for requests from the network not just localhost allowing for testing on multiple devices on the same network but breaks webpacks sockjs-node usage. Toggle depending on your needs
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './resources/src/index.js' // actual entry point.
  ],
  output: {
    path: __dirname,
    publicPath: 'http://127.0.0.1:9090/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  // tell webpack to take .jsx file and pass them to Bable for transpiling. The way you do this is with loaders.
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders:['style', 'css?sourceMap', 'sass?sourceMap'], // utilizing source map options for css debugging in dev tools. Displays source file for given css selector or element.
        include: path.join(__dirname),
        resolve: {
          alias: {
            images: path.join(__dirname, 'public/images')
          }
        }
      },
      {
        test: /\.jsx?/, // RegEx that webpack uses to determine if .js/.jsx files should be transpiled.
        exclude: /node_modules/, // exclude
        loaders: ['react-hot', 'babel'] // Loaders to be used.
      },
      {
        test: /\.(eot|woff|png|jpg|gif|svg|ttf)$/,
        loader: 'url-loader?limit=10000'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {BROWSER: JSON.stringify(true)}
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
