import React from 'react';

import { Container, StyledWrapperContent } from './styled';

export const Wrapper = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export const WrapperContent = ({ children }) => {
  return (
    <main id='main'>
      <StyledWrapperContent>
        {children}
      </StyledWrapperContent>
    </main>
  );
}