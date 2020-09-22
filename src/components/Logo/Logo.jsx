import React from 'react';

import { ReactComponent as LogoImg } from '../../images/logo.svg';
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