/*
 | A popular misconception is that React Router library (RR) is the official routing solution from Facebook but the majority of projects at Facebook don’t use it. It is not necessary to combine routing and client-side navigation within the same component as it’s done in RR. Instead we ar using an npm module called history that can handle the navigation part (FYI, it’s sort of a wrapper for HTML5 History API and is also used internally by RR). You just create history.js file in your project where you initialize this component (class) and use it as a singleton in your app.
*/
import createHistory from 'history/createBrowserHistory';

export default createHistory();
