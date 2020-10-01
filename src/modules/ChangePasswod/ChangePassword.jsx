import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast, Slide, ToastContainer } from "react-toastify";

import FormInput from '../../components/FormInput';
import { DefaultButton } from '../../components/Button/Button';
import FieldWrapper from '../../components/FieldWrapper';

import { updatePasswordThunk } from '../../store/users/thunks';
import { passwordValidationData } from '../../constants/formPatterns';

import "react-toastify/dist/ReactToastify.css";

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
        <FieldWrapper className="edit" label="New password" error={errors.password || ''}>
          <FormInput
            primary
            type="password"
            name="password"
            placeholder="Enter new password"
            invalid={'password' in errors}
            ref={register(passwordValidationData)}
          />
        </FieldWrapper>

        <FieldWrapper className="edit" label="Confirm new password" error={errors.confirmPassword || ''}>
          <FormInput
            primary
            type="password"
            name="confirmPassword"
            placeholder="Confirm new password"
            invalid={'confirmPassword' in errors}
            ref={register(passwordValidationData)}
          />
        </FieldWrapper>

        <DefaultButton type="submit">Change password</DefaultButton>
      </form>
    </>
  );
}

export default ChangePassword;