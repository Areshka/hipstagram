import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

import Button from '../Button';
import FormInput from '../FormInput';

import { loginValidationData, passwordValidationData } from '../../constants/formPatterns';

const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = ({ login, password }) => {
    console.log(login, password)
  }

  return (
    <>
      <form className="form-auth" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="form-auth__title">Sing In</h3>
        <FormInput
          label="Login"
          className="field-wrap__input"
          type="text"
          name="login"
          placeholder="Enter your login"
          error={errors.login}
          reference={register(loginValidationData)}
        />
        <FormInput
          label="Password"
          className="field-wrap__input"
          type="password"
          name="password"
          placeholder="Enter your password"
          error={errors.password}
          reference={register(passwordValidationData)}
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