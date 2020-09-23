import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Auth from './containers/Auth';
import Application from './containers/Application';

import './App.scss';

function App() {
  const isAuth = true;
  
  return (
    <div className="wrapper">
      <Router>
        {isAuth ? <Application /> : <Auth />}
      </Router>
    </div>
  );
}

export default App;
