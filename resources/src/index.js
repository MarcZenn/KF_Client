import React from 'react';

// Import the react dom which we will use to render our React Component into the DOM anchored at element #root. Make sure react-dom is installed in package.json. react helps us create components, react-dom helps us put our react code into the DOM
import ReactDOM from 'react-dom';

// Routes/Routing
import {Router, Route, IndexRoute} from 'react-router';
import routes from '../../app/routes.js';

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
  <Router routes={routes} onUpdate={() => window.scrollTo(0, 0)} />,
  document.getElementById('root')
)
