import React from 'react';
import { Provider} from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";

import Auth from './containers/Auth';
import Application from './containers/Application';
import store from './store/store';

import './App.scss';

function App() {
  const isAuth = true;

  return (
    <div className="wrapper">
      <Provider store={store}>
        <Router>
          {isAuth ? <Application /> : <Auth />}         
        </Router>
      </Provider>
    </div>
  );
}

export default App;
