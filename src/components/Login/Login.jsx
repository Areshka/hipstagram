import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

import { Button } from '../Button/Button';
import FormInput from '../FormInput';

import { loginValidationData, passwordValidationData } from '../../constants/formPatterns';
import { FormAuth, FormAuthTitle, AuthLink } from '../../containers/Auth/styled';
import FieldWrapper from '../FieldWrapper';

const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = ({ login, password }) => {
    console.log(login, password)
  }

  return (
    <>
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