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
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    )
  })

export default FormInput;