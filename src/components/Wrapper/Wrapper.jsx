import React from 'react';
import './style.scss';

export const Wrapper = ({ children }) => {
  return (
    <div className='container'>
      {children}
    </div>
  );
}

export const WrapperContent = ({ children }) => {
  return (
    <main id='main'>
      <div className='wrapper-content'>
        {children}
      </div>
    </main>
  );
}