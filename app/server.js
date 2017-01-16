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

// import some new stuff
import React from 'react'
// we'll use this to render our app to an html string
import { renderToString } from 'react-dom/server'
// and these to match the url to routes and then render
import { match, RouterContext } from 'react-router'
import routes from './routing/routes.js';

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
if(process.env.NODE_ENV == 'production') {

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

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, '.././public/index.html'));
// });

// send all requests to index.html so browserHistory works

app.get('/', (req, res) => {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    // in here we can make some decisions all at once
    if (err) {
      // there was an error somewhere during route matching
      res.status(500).send(err.message)
    } else if (redirect) {
      // we haven't talked about `onEnter` hooks on routes, but before a
      // route is entered, it can redirect. Here we handle on the server.
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      // if we got props then we matched a route and can render
      const appHtml = renderToString(<RouterContext {...props}/>)
      res.send(renderPage(appHtml))
    } else {
      // no errors, no redirect, we just didn't match anything
      res.status(404).send('Not Found')
    }
  })
})

function renderPage(appHtml) {
  return `
  <!DOCTYPE html>
  <html class="no-fouc" lang="en" xml:lang="en">
  <head>
    <style type="text/css">.no-fouc{display: none;}</style> <!-- Notice the class "no-fouc" on the html/body tags. We set the entire html tag to hidden immediately on page load and then override this styling at the bottom of the body with a simple script. This helps in fighting FOUC! - http://www.techrepublic.com/blog/web-designer/how-to-prevent-flash-of-unstyled-content-on-your-websites/ -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/sockjs-client/1.1.1/sockjs.min.js"></script>
    <title>Marc Zenn</title>
    <meta name="marczennpersonalwebsite" content="en-us">


    <!-- Favicon 'public/favicons' -->
    <link rel="apple-touch-icon" sizes="57x57" href="public/favicons/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="public/favicons/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="public/favicons/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="public/favicons/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="public/favicons/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="public/favicons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="public/favicons/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="public/favicons/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="public/favicons/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="public/favicons/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="public/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="public/favicons/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="public/favicons/favicon-16x16.png">
    <link rel="manifest" href="public/favicons/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
  </head>
  <body>
    <div id='root'></div>
    <script type="text/javascript" src="/bundle.js"></script>
    <script>(function(){document.getElementsByClassName('no-fouc')[0].className = 'fouc-fought';})();</script>
  </body>
  </html>
   `
};


app.listen(port, function(error) {
  if (error) {
    console.log(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", port, port);
  }
});
