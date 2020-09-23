import React from 'react';
import {
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Users from '../../components/Users';
import Profile from '../../components/Profile';

const NotAuthRouter = () => {
  return (
    <Switch>
      <Route path='/users' component={Users} />
      <Route path='/profile' component={Profile} />
      <Redirect to='/profile' />
    </Switch>
  );
}

export default NotAuthRouter;