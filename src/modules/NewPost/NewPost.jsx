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

const NewPost = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const redirectToProfile = () => {
    history.push('/profile');
  }

  const onSubmit = ({ file, title }) => {
    const image = file[0];
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    dispatch(createPostThunk(formData, redirectToProfile))
  }

  return (
    <>
      <Header />
      <WrapperContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldWrapper>
            <FormInput
              type="file"
              name="file"
              ref={register()}
            />
          </FieldWrapper>

          <FieldWrapper>
            <FormInput
              type="text"
              name="title"
              placeholder="Enter title"
              ref={register()}
            />
          </FieldWrapper>

          <DefaultButton>Add post</DefaultButton>
        </form>
      </WrapperContent>
    </>
  );
}

export default NewPost;