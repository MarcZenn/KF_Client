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
const handleServerRender = require('./serverEntry.js');
// import handleServerRender from './serverEntry.js';
console.log(handleServerRender)

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

app.set('view engine', 'ejs'); // Support for ejs

app.use(bodyParser.json({type: '*/*', limit: '50mb'})); // Parse requests to JSON

app.use(express.static(path.join(__dirname + '/../'))); // Serve from root directory


// Server-Side Rendering
app.get('*', handleServerRender);


app.listen(port, function(error) {
  if (error) {
    console.log(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", port, port);
  }
});
