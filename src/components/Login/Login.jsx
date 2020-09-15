import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';
import FormInput from '../FormInput';

const Login = () => {
  return (
    <>
      <form className="form-auth">
        <h3 className="form-auth__title">Sing In</h3>
        <FormInput
          label="Login"
          className="form-box__input"
          type="text"
          name="login"
          placeholder="Enter your login"
        />
        <FormInput
          label="Password"
          className="form-box__input"
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <div className="btn-wrapper">
          <Button className="btn" type="submit" title="Sing In" />
        </div>
      </form>
      <p className="auth-link">
        If you not have account you can <Link to="/registration">Registration</Link>
      </p>
    </>
  );
}

export default Login;