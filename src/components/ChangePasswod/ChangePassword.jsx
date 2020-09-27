import React from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '../Button/Button';
import FormInput from '../FormInput';
import FieldWrapper from '../FieldWrapper';

import { passwordValidationData } from '../../constants/formPatterns';

const ChangePassword = () => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = () => {
    console.log('OK')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldWrapper className="default" label="New Password" error={errors.password || ''}>
        <FormInput
          primary
          type="password"
          name="password"
          placeholder="Enter new password"
          invalid={'password' in errors}
          ref={register(passwordValidationData)}
        />
      </FieldWrapper>

      <FieldWrapper label="Confirm New Password" error={errors.password || ''}>
        <FormInput
          primary
          type="password"
          name="confirm_password"
          placeholder="Confirm new password"
          invalid={'confirm_password' in errors}
          ref={register(passwordValidationData)}
        />
      </FieldWrapper>

      <Button type="submit" title="Change password" />
    </form>
  );
}

export default ChangePassword;