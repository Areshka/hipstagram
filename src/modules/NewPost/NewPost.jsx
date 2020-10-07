import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import FormInput from '../../components/FormInput';
import FieldWrapper from '../../components/FieldWrapper';
import { DefaultButton } from '../../components/Button/Button';
import { WrapperContent } from '../../components/Wrapper/Wrapper';

import { createPostThunk } from '../../store/users/thunks';
import { fileValidation } from '../../constants/formPatterns';

const NewPost = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const { register, handleSubmit, errors, setError } = useForm();
  const redirectToProfile = () => history.push('/profile');

  const onSubmit = ({ file, title }) => {
    const image = file[0];
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);

    if (image.size > 2e6) {
      setError("file", {
        type: "filesize",
        message: "File size should be no more than 2 Mb"
      });
      return;
    }

    dispatch(createPostThunk({ formData, redirectToProfile }))
    // history.push('/profile')
  }

  return (
    <>
      <Header />
      <WrapperContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldWrapper error={errors.file || ''}>
            <FormInput
              type="file"
              name="file"
              invalid={'file' in errors}
              ref={register(fileValidation())}
            />
          </FieldWrapper>

          <FieldWrapper error={errors.title || ''}>
            <FormInput
              type="text"
              name="title"
              placeholder="Enter title"
              invalid={'title' in errors}
              ref={register({ required: true })}
            />
          </FieldWrapper>

          <DefaultButton>Add post</DefaultButton>
        </form>
      </WrapperContent>
    </>
  );
}

export default NewPost;