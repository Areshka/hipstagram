import React from 'react';

import { Input } from './styled'

const FormInput = React.forwardRef(
  ({
    onChange,
    ...props
  }, ref) => {

    return (
      <Input
        {...props}
        ref={ref}
        onChange={onChange}
      />
    )
  })

export default FormInput;