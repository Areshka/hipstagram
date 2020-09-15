import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';
import FormInput from '../FormInput';

const Registration = () => {
  return (
    <>
      <form className="form-auth">
        <h3 className="form-auth__title">Sing Up</h3>
        <FormInput
          label="Login"
          className="form-box__input"
          type="text"
          name="login"
          placeholder="Enter your login"
        />
        <FormInput
          label="Email"
          className="form-box__input"
          type="email"
          name="email"
          placeholder="Enter your Email"
        />
        <FormInput
          label="Password"
          className="form-box__input"
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <div className="btn-wrapper">
          <Button className="btn" type="submit" title="Sing Up" />
        </div>
      </form>
      <p className="auth-link">
        If you have account you can <Link to="/login" >Login</Link>
      </p>
    </>
  );
}

export default Registration;