import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Auth from './containers/Auth';
import Users from './components/Users';
import Profile from './components/Profile';

import './App.scss';

function App() {
  const isAuth = true;
  return (
    <div className="wrapper">
      <Router>
        {isAuth ?
          <Switch>
            <Route path='/users' component={Users} />
            <Route path='/profile' component={Profile} />
            <Redirect to='/users' />
          </Switch>
          :
          <Auth />
        }
      </Router>
    </div>
  );
}

export default App;
