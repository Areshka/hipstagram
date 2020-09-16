import React from 'react';

import './style.scss';

const FormInput = ({
  label,
  className,
  type,
  name,
  placeholder,
  value,
  onChange,
  error,
  reference
}) => {

  return (
    <div className='field-wrap'>
      <label htmlFor={name}>{label} </label>
      <input
        id={name}
        className={error ? `${className} ${className}--error` : className}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        ref={reference}
      />
      {error && <p className="field-wrap__error-message">{error.message || "Invalid field"}</p>}
    </div>
  )
}

export default FormInput;