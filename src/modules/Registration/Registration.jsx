import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { ToastContainer } from "react-toastify";
import { Link, useHistory } from 'react-router-dom';

import { registrationThunk } from '../../store/users/thunks';

import FormInput from '../../components/FormInput';
import { Button } from '../../components/Button/Button';
import FieldWrapper from '../../components/FieldWrapper';

import {
  loginValidationData,
  emailValidationData,
  passwordValidationData
} from '../../constants/formPatterns';

import {
  FormAuth,
  FormAuthTitle,
  AuthLink
} from '../../containers/Auth/styled';
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();

  const redirectToLogin = () => {
    history.push('/login');
  }

  const onSubmit = ({ login, email, password }) => {
    dispatch(registrationThunk({
      login,
      email,
      password
    }, redirectToLogin))
  }

  return (
    <>
      <ToastContainer />
      <FormAuth onSubmit={handleSubmit(onSubmit)}>
        <FormAuthTitle>Sing Up</FormAuthTitle>
        <FieldWrapper label="Login" error={errors.login}>
          <FormInput
            type="text"
            name="login"
            placeholder="Enter your login"
            invalid={'login' in errors}
            ref={register(loginValidationData)}
          />
        </FieldWrapper>
        <FieldWrapper label="Email" error={errors.email}>
          <FormInput
            type="email"
            name="email"
            placeholder="Enter your Email"
            invalid={'email' in errors}
            ref={register(emailValidationData)}
          />
        </FieldWrapper>
        <FieldWrapper mb label="Password" error={errors.password}>
          <FormInput
            type="password"
            name="password"
            placeholder="Enter your password"
            invalid={'password' in errors}
            ref={register(passwordValidationData)}
          />
        </FieldWrapper>
        <Button type="submit">Sing Up</Button>
      </FormAuth>
      <AuthLink>
        If you have account you can <Link to="/login" >Login</Link>
      </AuthLink>
    </>
  );
}

export default Registration;