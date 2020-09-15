import React from 'react';

import './style.scss'

const Button = ({
  className,
  type,
  handleClick,
  title,
}) => (
    <button
      type={type}
      className={className}
      onClick={handleClick}
    >
      {title}
    </button>
  )

export default Button;