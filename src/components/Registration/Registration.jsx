import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

import Button from '../Button';
import FormInput from '../FormInput';

import {
  loginValidationData,
  emailValidationData,
  passwordValidationData
} from '../../constants/formPatterns';

const Registration = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = ({ login, email, password }) => {
    console.log(login, email, password)
  }

  return (
    <>
      <form className="form-auth" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="form-auth__title">Sing Up</h3>
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
          label="Email"
          className="field-wrap__input"
          type="email"
          name="email"
          placeholder="Enter your Email"
          reference={register(emailValidationData)}
          error={errors.email}
        />
        <FormInput
          label="Password"
          className="field-wrap__input"
          type="password"
          name="password"
          placeholder="Enter your password"
          reference={register(passwordValidationData)}
          error={errors.password}
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