import React from 'react';

import { StyledButton, StyledFollowButton } from './styled'

export const Button = ({ type, handleClick, title, }) => {
  return (
    <StyledButton
      type={type}
      onClick={() => handleClick && handleClick()}
    >
      {title}
    </StyledButton>
  );
}

export const FollowButton = ({ type, handleClick, title, isFollow }) => {
  return (
    <StyledFollowButton
      isFollow={isFollow}
      type={type}
      onClick={() => handleClick && handleClick()}
    >
      {title}
    </StyledFollowButton>
  )
}