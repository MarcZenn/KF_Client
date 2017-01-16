// import React
import React from 'react';

//Components
import {Route} from 'react-router';
import PageNotFound from '../../.././resources/Components/ErrorPages/404.jsx';

const authRoutes = (
  <Route>
    <Route path='/*' component={PageNotFound}/>
  </Route>
)

export default authRoutes
