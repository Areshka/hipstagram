import React from 'react';

import AuthRouter from './AuthRouter';
import Logo from '../../components/Logo';

import {
  AuthWrapper,
  AuthWrapperImgBlock,
  AuthBlock
} from './styled.js';

const Auth = () => {

  return (
    <AuthWrapper>
      <AuthWrapperImgBlock></AuthWrapperImgBlock>
      <AuthBlock>
        <Logo />
        <AuthRouter />
      </AuthBlock>
    </AuthWrapper>
  )
}

export default Auth;