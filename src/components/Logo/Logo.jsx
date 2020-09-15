import React from 'react';

import { ReactComponent as LogoImg } from '../../images/logo.svg';
import './style.scss';

const Logo = () => {
  return (
    <h1 className="logo">
      <LogoImg className="logo__img" />
      <span className="logo__title">hipstagram</span>
    </h1>
  );
}

export default Logo;