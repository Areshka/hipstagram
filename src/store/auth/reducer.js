import ActionTypes from './actionTypes';

const createInitialState = () => {
  return {
    currentUser: {
      auth: false,
      access_token: '',
    }
  }
};

const authReducer = (state = createInitialState(), action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER:
      return {
        ...state,
        currentUser: {
          auth: true,
          access_token: action.payload
        }
      };

    case ActionTypes.LOGOUT_USER:
      return {
        ...state,
        currentUser: {
          auth: false,
          access_token: ''
        }
      };

    default:
      return state;
  }
}

export default authReducer;