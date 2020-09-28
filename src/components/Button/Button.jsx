import React from 'react';

import { StyledButton, StyledFollowButton } from './styled'

export const Button = ({ type, handleClick, title, ...props }) => {
  return (
    <StyledButton
      {...props}
      type={type}
      onClick={() => handleClick && handleClick()}
    >
      {title}
    </StyledButton>
  );
}

export const FollowButton = ({ type, handleClick, title, isFollow, ...props }) => {
  return (
    <StyledFollowButton
      {...props}
      isFollow={isFollow}
      type={type}
      onClick={() => handleClick && handleClick()}
    >
      { title}
    </StyledFollowButton >
  )
}