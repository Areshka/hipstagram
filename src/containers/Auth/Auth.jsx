import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import Logo from '../../components/Logo';
import Login from '../../components/Login';
import Registration from '../../components/Registration';

import './style.scss'

const Auth = () => {

  return (
    <section className='auth-wrapper'>
      <div className="auth-img"></div>
      <div className="auth">
        <Logo />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Redirect to="/login" />
        </Switch>
      </div>
    </section>
  )
}

export default Auth;