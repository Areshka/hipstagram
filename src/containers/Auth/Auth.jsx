import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import Logo from '../../components/Logo';
import Login from '../../components/Login';
import Registration from '../../components/Registration';

import {
  AuthWrapper,
  AuthWrapperImgBlock,
  AuthBlock
} from './styled.js';

const Auth = () => {

  return (
    <AuthWrapper>
      <AuthWrapperImgBlock></AuthWrapperImgBlock>
      <AuthBlock>
        <Logo />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Redirect to="/login" />
        </Switch>
      </AuthBlock>
    </AuthWrapper>
  )
}

export default Auth;