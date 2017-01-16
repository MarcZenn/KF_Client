// import React
import React from 'react';

// Components
import {Route} from 'react-router';
import About from '../../.././resources/Components/Static/About.jsx';
import PrivacyPolicy from '../../.././resources/Components/Static/PrivacyPolicy.jsx';
import TermsOfUse from '../../.././resources/Components/Static/TermsOfUse.jsx';
import Contact from '../../.././resources/Containers/Contact.jsx';
import HowItWorks from '../../.././resources/Components/Static/HowItWorks.jsx';
import ChannelPartners from '../../.././resources/Components/Static/ChannelPartners.jsx';
import BusinessResources from '../../.././resources/Components/Static/BusinessResources.jsx';
import HowStoreWorks from '../../.././resources/Components/Static/HowStoreWorks.jsx';
import Press from '../../.././resources/Components/Static/Press.jsx';

const staticRoutes = (
  <Route>
    <Route path="/about" component={About} />
    <Route path="/privacy-policy" component={PrivacyPolicy} />
    <Route path="/terms-of-use" component={TermsOfUse} />
    <Route path='/contact' component={Contact} />
    <Route path='/how-it-works' component={HowItWorks} />
    <Route path='/channel-partners' component={ChannelPartners} />
    <Route path='/business-resources' component={BusinessResources} />
    <Route path='/how-the-store-works' component={HowStoreWorks} />
    <Route path='/press' component={Press} />
  </Route>
)

export default staticRoutes
