import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Auth from './containers/Auth';
import Users from './components/Users';

import './App.scss';

function App() {
  const isAuth = true;
  return (
    <div className="wrapper">
      <Router>
        {isAuth ?
          <>
            <Route path='/users' component={Users} />
            <Redirect to='/users' />
          </>
          :
          <Auth />
        }
      </Router>
    </div>
  );
}

export default App;
