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

  const inputErrorStyle = error ? { borderColor: "rgb(243, 69, 69)" } : null;

  return (
    <div className='field-wrap'>
      {label && <label htmlFor={name}>{label} </label>}
      <input
        style={inputErrorStyle}
        id={name}
        className={className}
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