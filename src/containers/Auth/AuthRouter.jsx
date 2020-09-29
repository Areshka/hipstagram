import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import Login from '../../modules/Login';
import Registration from '../../modules/Registration';

const AuthRouter = () => {

  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
      <Redirect to="/login" />
    </Switch>
  )
}

export default AuthRouter;