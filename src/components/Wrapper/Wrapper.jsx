import React from 'react';
import './style.scss';

const Wrapper = ({ children }) => {
  return (
    <section className='auth-wrapper'>
      {children}
    </section>
  );
}

export default Wrapper