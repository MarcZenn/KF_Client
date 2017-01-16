/*
 * React Router sets up Routing for a react application. It lets one mimic url changes for a single page app.
*/
import React from 'react';


// Components
import {Router, Route, IndexRoute} from 'react-router';
import App from '../.././resources/src/App.jsx';
import Home from '../.././resources/Components/Home/Home.jsx';
import authRoutes from './auth/auth.js';
import errorsRoutes from './error/errors.js';
import staticRoutes from './static/static.js';
import coopRoutes from './coop/coops.js';

export default (
  <Router path='/' component={App}>
    {/*
      index
    */}
    <IndexRoute component={Home} />

    {/*
      Auth routes
    */}
    {authRoutes}

    {/*
      Coop routes
    */}
    {coopRoutes}

    {/*
      Static routes
    */}
    {staticRoutes}

    {/*
      Error routes
    */}
    {errorsRoutes}
  </Router>
);
