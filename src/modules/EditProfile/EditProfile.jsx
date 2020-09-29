import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';

import FormInput from '../../components/FormInput';
import { Button } from '../../components/Button/Button';
import FieldWrapper from '../../components/FieldWrapper';

import { nameValidation, emailValidationData } from '../../constants/formPatterns';
import { updateCurrentUserThunk } from '../../store/users/thunks';
import { getCurrentUserSelector } from '../../store/users/selectors';

import "react-toastify/dist/ReactToastify.css";

const EditProfile = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(getCurrentUserSelector);
  const { register, errors, handleSubmit, setValue } = useForm();

  useEffect(() => {
    setValue("firstName", currentUser.firstName)
    setValue("lastName", currentUser.lastName)
    setValue("email", currentUser.email)
  }, [currentUser])

  const onSubmit = (data) => {
    dispatch(updateCurrentUserThunk(data))
  }

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldWrapper className="edit" label="First name" error={errors.firstName || ''}>
          <FormInput
            primary
            type="text"
            name="firstName"
            placeholder="Enter first name"
            invalid={'firstName' in errors}
            ref={register(nameValidation)}
          />
        </FieldWrapper>

        <FieldWrapper className="edit" label="Last name" error={errors.lastName || ''}>
          <FormInput
            primary
            type="text"
            name="lastName"
            placeholder="Enter last name"
            invalid={'lastName' in errors}
            ref={register(nameValidation)}
          />
        </FieldWrapper>

        <FieldWrapper className="edit" label="Email" error={errors.email || ''}>
          <FormInput
            primary
            type="email"
            name="email"
            placeholder="Enter your Email"
            invalid={'email' in errors}
            ref={register(emailValidationData)}
          />
        </FieldWrapper>

        <Button className="btn" type="submit" title="Update" />
      </form>
    </>
  );
}

export default EditProfile;