import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

import { Button } from '../Button/Button';
import FormInput from '../FormInput';

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
import FieldWrapper from '../FieldWrapper';


const Registration = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = ({ login, email, password }) => {
    console.log(login, email, password)
  }

  return (
    <>
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
        <Button type="submit" title="Sing Up" />
      </FormAuth>
      <AuthLink>
        If you have account you can <Link to="/login" >Login</Link>
      </AuthLink>
    </>
  );
}

export default Registration;