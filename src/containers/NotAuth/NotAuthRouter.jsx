import React from 'react';
import {
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Profile from '../../pages/Profile';
import Users from '../../components/Users';
import Settings from '../../pages/Settings/Settings';

const NotAuthRouter = () => {
  return (
    <Switch>
      <Route path='/users' component={Users} />
      <Route path='/profile' component={Profile} />
      <Route path="/settings" component={Settings} />      
      <Redirect to='/profile' />
    </Switch>
  );
}

export default NotAuthRouter;