import React from 'react';
import './style.scss';

const Wrapper = ({ children }) => {
  return (
    <section className='wrapper'>
      {children}
    </section>
  );
}

export default Wrapper