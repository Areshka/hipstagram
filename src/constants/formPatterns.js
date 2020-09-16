export const loginValidationData = {
  required: {
    value: true,
    message: 'Login can not be empty',
  },

  minLength: {
    value: 3,
    message: `Login must be at least 3 characters`
  },

  maxLength: {
    value: 16,
    message: 'Login must be no more than 16 characters'
  },

  pattern: {
    value: /^[a-zA-Z0-9_-]+$/,
    message: 'Login can contain large and small latin characters and numbers'
  }
}

export const emailValidationData = {
  required: {
    value: true,
    message: 'Email can not be empty',
  },

  pattern: {
    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email must has type \'example@mail.com\''
  }
}

export const passwordValidationData = {
  required: {
    value: true,
    message: 'Password can not be empty',
  },

  minLength: {
    value: 8,
    message: 'Password must be at least 8 characters'
  },

  maxLength: {
    value: 16,
    message: 'Password must be no more than 16 characters'
  },

  pattern: {
    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
    message: 'Password can contain large and small latin characters and numbers'
  }
}