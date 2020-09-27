import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';

import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { loginThunk } from '../../store/auth/thunks';

import FormInput from '../FormInput';
import { Button } from '../Button/Button';
import FieldWrapper from '../FieldWrapper';

import { loginValidationData, passwordValidationData } from '../../constants/formPatterns';
import { FormAuth, FormAuthTitle, AuthLink } from '../../containers/Auth/styled';

const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = ({ login, password }) => {
    dispatch(loginThunk({
      login,
      password
    }))
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        transition={Slide}
      />
      <FormAuth onSubmit={handleSubmit(onSubmit)}>
        <FormAuthTitle>Sing In</FormAuthTitle>
        <FieldWrapper label="Login" error={errors.login || ''}>
          <FormInput
            type="text"
            name="login"
            placeholder="Enter your login"
            invalid={'login' in errors}
            ref={register(loginValidationData)}
          />
        </FieldWrapper>
        <FieldWrapper mb label="Password" error={errors.password || ''}>
          <FormInput
            type="password"
            name="password"
            placeholder="Enter your password"
            invalid={'password' in errors}
            ref={register(passwordValidationData)}
          />
        </FieldWrapper>
        <Button type="submit" title="Sing In" />
      </FormAuth>
      <AuthLink>
        If you not have account you can <Link to="/registration">Registration</Link>
      </AuthLink>
    </>
  );
}

export default Login;