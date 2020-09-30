import React from 'react';

import { StyledButton, StyledDefaultButton } from './styled'

export const Button = ({ handleClick, children, ...props }) => {
  return (
    <StyledButton
      {...props}
      onClick={() => handleClick && handleClick()}
    >
      {children}
    </StyledButton>
  );
}

export const DefaultButton = ({ handleClick, children, ...props }) => {
  return (
    <StyledDefaultButton
      {...props}
      onClick={() => handleClick && handleClick()}
    >
      {children}
    </StyledDefaultButton >
  )
}