import ActionTypes from './actionTypes';

const createInitialState = () => {
  return {
    currentUser: {},
    auth: {
      authStatus: false,
      access_token: '',
    },
    usersList: []
  }
};

const usersReducer = (state = createInitialState(), action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER:
      return {
        ...state,
        auth: {
          authStatus: true,
          access_token: action.payload
        }
      };

    case ActionTypes.LOGOUT_USER:
      return state = createInitialState();

    case ActionTypes.ADD_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
          auth: {
            authStatus: true,
            access_token: localStorage.getItem('access_token')
          }
      };

    case ActionTypes.UPDATE_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };

    case ActionTypes.CREATE_POST:
      return {
        ...state
      };

    case ActionTypes.GET_USERS:
      return {
        ...state,
        usersList: action.payload
      };

    default:
      return state;
  }
}

export default usersReducer;