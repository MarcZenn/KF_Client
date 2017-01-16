// import React
import React from 'react';

// Import the react dom which we will use to render our React Component into the DOM anchored at element #root. Make sure react-dom is installed in package.json. react helps us create components, react-dom helps us put our react code into the DOM
import ReactDOM from 'react-dom';

// React-Router Routes
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import routes from '../../app/routing/routes.js';

// import history from '../.././app/routing/history.js';
// import router from '../.././app/routing/router.js';
// let routes = require('../.././app/routing/routes.json').default;

// Initialize React Google Analytics
var ReactGA = require('react-ga');
ReactGA.initialize('UA-84944356-1', {
  debug: true,
});

// Google Analytics - Log Page View
function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

// Outermost Parent Component
import App from './App.jsx';



// Tell the React virtual DOM where to mount the App Component and also include react-router routes. Notice the onUpdate method...without this when visiting a new page, the previous pages window position will be stored and you will land at that same scroll position upon visiting the new page (could be at the bottom or middle of the page)....Hate that this is necessary. Will try to find a cleaner fix asap.
ReactDOM.render(
  <Router routes={routes} history={browserHistory} onUpdate={() => window.scrollTo(0, 0)} />,
  document.getElementById('root')
)

// TODO:: mover over to custom routing solution.
// function renderComponent(component) {
//   ReactDOM.render(component, document.getElementById('root'));
// }

// Find and render a web page matching the current URL path,
// if such page is not found then render an error page (see routes.json, core/router.js)
// function render(location) {
//   router.resolve(routes, location)
//     .then(renderComponent)
//     .catch(error => router.resolve(routes, { ...location, error }).then(renderComponent));
// }

// Handle client-side navigation by using HTML5 History API
// For more information visit https://github.com/ReactJSTraining/history/tree/master/docs#readme
// history.listen(render);
// render(history.location);
