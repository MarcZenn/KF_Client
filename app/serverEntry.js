/* Server-Side Render Handler:
 * Express Route Catch-All for all server-side routes.
*/
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routing/routes.js';
import PageNotFound from '.././resources/Components/Errors/404.jsx';

function handleServerRender(req, res) {
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
}

export default handleServerRender;
