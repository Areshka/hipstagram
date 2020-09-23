import React from 'react';

import Layout from './containers/Layout';
import Application from './containers/Application';

import './App.scss';

function App() {

  return (
    <div className="wrapper">
      <Layout>
        <Application />
      </Layout>
    </div>
  );
}

export default App;
