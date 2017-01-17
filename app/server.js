/*----------------------------------------------------------------------------
               Express server with Rendering React.

                            - using ES6 syntax -

/* ----------------------------------------------------------------------------
                      SERVE ASSETS LOCALLY W/ WEBPACK

  The command below should run when in production for server side rendering via express js.

  $ npm start

-------------------------------------------------------------------------------- */
process.env.BROWSER == false;
const path = require('path');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const port = process.env.PORT || 9090;
const cors = require('cors');
const compression = require('compression')

// For server-side rendering
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routing/routes.js';
import PageNotFound from '.././resources/Components/Errors/404.jsx';

const app = express();

// Must come first!
app.use(compression());

app.use(cors({
  "origin": "http://localhost:9090",
  "methods": "GET, HEAD, PUT, PATCH, POST, DELETE",
  "allowedHeaders": ["Origin, X-Requested-With, Accept, Content-Type, Authorization"],
  "credentials": true,
  "preflightContinue": false
}));

app.set('view engine', 'ejs'); // Support for ejs production

app.use(bodyParser.json({type: '*/*', limit: '50mb'})); // Parse requests to JSON

app.use(express.static(path.join(__dirname + '/../'))); // Serve from root directory

// Server-Side Rendering or not depending on environment.
app.get('*', (req, res) => {

  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
      // In case of error display the error message
      if (err) {
        return res.status(500).send(err.message);
      }
      // In case of redirect propagate the redirect to the browser
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }
      // Generate the React markup for the current route
      let markup;
      if (renderProps) {
        // if the current route matched we have renderProps
        markup = renderToString(<RouterContext {...renderProps}/>);
      } else {
        // otherwise we can render a 404 page
        markup = renderToString(<PageNotFound/>);
        res.status(404);
      }
      // render the index template with the embedded React markup
      return res.render('.././public/index.ejs', { markup });
    }
  );
});


app.listen(port, function(error) {
  if (error) {
    console.log(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser for SSR.", port, port);
  }
});
