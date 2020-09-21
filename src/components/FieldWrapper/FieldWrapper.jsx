import React from 'react';

import { FieldWrap, ErrorMessage } from './styled';

const FieldWrapper = ({
  label,
  children,
  error,
  mb
}) => {
  return (
    <FieldWrap mb={mb}>
      {label && <label>{label}</label>}
      {children}
      {error && <ErrorMessage>{error.message || "Invalid field"}</ErrorMessage>}
    </FieldWrap>
  )
}

export default FieldWrapper;