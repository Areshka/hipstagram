import React from 'react';

import { FieldWrap, ErrorMessage } from './styled';

const FieldWrapper = ({
  label,
  forHtml,
  children,
  error,
  ...props
}) => {
  return (
    <FieldWrap {...props}>
      {label && <label htmlFor={forHtml}>{label}</label>}
      {children}
      {error && <ErrorMessage>{error.message || "Invalid field"}</ErrorMessage>}
    </FieldWrap>
  )
}

export default FieldWrapper;