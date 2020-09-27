import React from 'react';

import { ReactComponent as LogoImg } from '../../assets/images/icons/logo.svg';
import { StyledLogo, StyledLogoTitle } from './styled';

const Logo = () => {
  return (
    <StyledLogo>
      <LogoImg />
      <StyledLogoTitle>hipstagram</StyledLogoTitle>
    </StyledLogo>
  );
}

export default Logo;