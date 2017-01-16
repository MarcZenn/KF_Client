// import React
import React from 'react';

// Components
import {Route} from 'react-router';
import Browse from '../../.././resources/Components/Coops/Discover/Browse.jsx';

const coopRoutes = (
  <Route>
    <Route path="/browse" component={Browse} />
  </Route>
)

export default coopRoutes
