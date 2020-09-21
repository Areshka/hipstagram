import React from 'react';

import { Input } from './styled'

const FormInput = React.forwardRef(
  ({
    error,
    onChange,
    ...props
  }, ref) => {

    return (
      <Input
        {...props}
        ref={ref}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    )
  })

export default FormInput;