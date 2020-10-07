import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';

import FormInput from '../../components/FormInput';
import FieldWrapper from '../../components/FieldWrapper';
import { DefaultButton } from '../../components/Button/Button';

import {
  nameValidation,
  emailValidationData,
  fileValidation
} from '../../constants/formPatterns';
import { updateCurrentUserThunk } from '../../store/users/thunks';
import { getCurrentUserSelector } from '../../store/users/selectors';

import IconDefaultAvatar from '../../assets/images/icons/icon-default-avatar.svg';
import "react-toastify/dist/ReactToastify.css";

const EditProfile = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(getCurrentUserSelector);
  const [avatarUrl, setAvatarUrl] = useState(currentUser.avatar || '');
  const { register, errors, handleSubmit, setValue } = useForm();

  useEffect(() => {
    setValue("firstName", currentUser.firstName);
    setValue("lastName", currentUser.lastName);
    setValue("email", currentUser.email);
  }, [setValue, currentUser]);

  const onSubmit = ({ firstName, lastName, email }) => {
    dispatch(updateCurrentUserThunk({
      firstName,
      lastName,
      email,
      avatar: avatarUrl
    }))
  }

  const handleAvatarChange = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];    

    reader.onloadend = () => {
      setAvatarUrl(reader.result);
    }

    reader.readAsDataURL(file)
  }

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldWrapper
          className='edit-avatar'
          forHtml="avatar"
          label={
            <img src={avatarUrl || currentUser.avatar ? avatarUrl || currentUser.avatar : IconDefaultAvatar} alt="Avatar" />
          }
          error={errors.file || ''}
        >
          <FormInput
            id="avatar"
            type="file"
            name="file"
            invalid={'file' in errors}
            onChange={handleAvatarChange}
            ref={register(fileValidation(false))}
          />
        </FieldWrapper>
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
        <DefaultButton type="submit">Update</DefaultButton>
      </form>
    </>
  );
}

export default EditProfile;