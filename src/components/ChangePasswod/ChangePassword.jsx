import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { toast, Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button } from '../Button/Button';
import FormInput from '../FormInput';
import FieldWrapper from '../FieldWrapper';

import { updatePasswordThunk } from '../../store/users/thunks';
import { passwordValidationData } from '../../constants/formPatterns';


const ChangePassword = () => {
  const dispatch = useDispatch()
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = ({ password, confirmPassword }) => {
    if (password !== confirmPassword) {
      toast.error('Passwords are not equal', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        transition: Slide,
      });
      return;
    }
    dispatch(updatePasswordThunk({
      password,
      confirmPassword
    }))
  }

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldWrapper label="New password" error={errors.password || ''}>
          <FormInput
            primary
            type="password"
            name="password"
            placeholder="Enter new password"
            invalid={'password' in errors}
            ref={register(passwordValidationData)}
          />
        </FieldWrapper>

        <FieldWrapper label="Confirm new password" error={errors.confirmPassword || ''}>
          <FormInput
            primary
            type="password"
            name="confirmPassword"
            placeholder="Confirm new password"
            invalid={'confirmPassword' in errors}
            ref={register(passwordValidationData)}
          />
        </FieldWrapper>

        <Button className="btn" type="submit" title="Change password" />
      </form>
    </>
  );
}

export default ChangePassword;