import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Auth from './containers/Auth';
import Users from './components/Users';

import './App.scss';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Auth />
      </Router>
      <Users />
    </div>
  );
}

export default App;
