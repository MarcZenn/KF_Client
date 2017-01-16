/*----------------------------------------------------------------------------
               Node server with Webpack bundling capabilities.

                            - using ES6 syntax -

/* ----------------------------------------------------------------------------
                      SERVE ASSETS LOCALLY W/ WEBPACK

  Run the command below in your terminal to hotload and serve assets.

  $ npm start

-------------------------------------------------------------------------------- */
const path = require('path');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const port = process.env.PORT || 9090;
const cors = require('cors');
var compression = require('compression')

const app = express();

// must come first!
app.use(compression())

app.use(cors({
  "origin": "http://localhost:9090",
  "methods": "GET, HEAD, PUT, PATCH, POST, DELETE",
  "allowedHeaders": ["Origin, X-Requested-With, Accept, Content-Type, Authorization"],
  "credentials": true,
  "preflightContinue": false
}));

// Check environment and dictate app behavior accordingly. If the environment is production use webpack.production.config (see postinstall script in package.json) and dont run webpack dev server.
if(process.env.NODE_ENV !== 'production') {

  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpack = require('webpack');
  const config = require('../webpack.config');
  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    noInfo: false,
    inline: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true
    }
  }));

  app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  }));
}

app.use(bodyParser.json({type: '*/*', limit: '50mb'})); // Parse requests to JSON

app.use(express.static(path.join(__dirname + '/../'))); // Serve from root directory

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '.././public/index.html'));
});


app.listen(port, function(error) {
  if (error) {
    console.log(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", port, port);
  }
});
