import React from 'react';

const FormInput = ({
  label,
  className,
  type,
  name,
  placeholder,
  value,
  onChange
}) => {

  return (
    <div>
      <label htmlFor={name}>{label} </label>
      <input
        id={name}
        className={className}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default FormInput;