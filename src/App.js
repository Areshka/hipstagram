import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Auth from './containers/Auth';
import Header from './components/Header';

import './App.scss';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Auth />
      </Router>
      <Header />
    </div>
  );
}

export default App;
