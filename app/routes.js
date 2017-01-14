// import React
import React from 'react';

// React Router sets up Routing for a react application. It lets one mimic url changes for a single page app i.e. if you have an About page then '...com/about' will return the About Component.
import {Router, Route, IndexRoute, browserHistory} from 'react-router'; // 'browserHistory' is whatever the user types in the browser after the domain.
import App from '../resources/src/App.jsx';
import Home from '../resources/Components/Home/Home.jsx';
import PageNotFound from '../resources/Components/ErrorPages/404.jsx';
import About from '../resources/Components/Static/About.jsx';
import TermsOfUse from '../resources/Components/Static/TermsOfUse.jsx';
import Contact from '../resources/Containers/Contact.jsx';
import PrivacyPolicy from '../resources/Components/Static/PrivacyPolicy.jsx';


export default (
  <Router path='/' history={browserHistory} component={App}>
    <IndexRoute component={Home} />
    <Route path='/about' component={About}/>
    <Route path='/terms-of-use' component={TermsOfUse}/>
    <Route path='/contact' component={Contact}/>
    <Route path='/privacy-policy' component={PrivacyPolicy}/>

    {/* error/maintenance pages */}
    <Route path='/*' component={PageNotFound}/>
  </Router>
);
