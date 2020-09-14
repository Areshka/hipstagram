import React from 'react';
import { ReactComponent as Logo } from './images/logo.svg'

import Wrapper from './components/Wrapper/Wrapper';

import './App.scss';
import FormInput from './components/FormInput/FormInput';

function App() {
  return (
    <Wrapper>
      <div className="wrap"></div>
      <div className="login">
        <h1 className="logo">
          <Logo className="logo__img" />
          <span className="logo__title">hipstagram</span>
        </h1>
        <form className="form-auth">
          <h3>Sing Up</h3>
          <FormInput
            label="Login"
            className="input"
            type="text"
            name="login"
            placeholder="Enter your login"
          />
          <FormInput
            label="Email"
            className="input"
            type="email"
            name="email"
            placeholder="Enter your Email"
          />
          <FormInput
            label="Password"
            className="input"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </form>
      </div>
    </Wrapper>
  );
}

export default App;
