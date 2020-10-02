import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

import Users from '../../modules/Users';
import Profile from '../../pages/Profile';
import NewPost from '../../modules/NewPost';
import Settings from '../../pages/Settings';

const NotAuthRouter = () => {
  return (
    <Switch>
      <Route path='/users' component={Users} />
      <Route path='/profile' component={Profile} />
      <Route path="/settings" component={Settings} />
      <Route path='/new_post' component={NewPost} />
      <Redirect to='/profile' />
    </Switch>
  );
}

export default NotAuthRouter;