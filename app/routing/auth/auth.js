// import React
import React from 'react';

// Components
import {Route} from 'react-router';
import Login from '../../.././resources/Components/Auth/Login.jsx';
import Register from '../../.././resources/Components/Auth/Register.jsx';

const authRoutes = (
  <Route>
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
  </Route>
)

export default authRoutes
