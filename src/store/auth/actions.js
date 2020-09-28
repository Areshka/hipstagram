import ActionTypes from './actionTypes';

export const loginAction = accessToken => {
  return {
    type: ActionTypes.LOGIN_USER,
    payload: accessToken,
  }
}

export const logoutAction = () => {
  return {
    type: ActionTypes.LOGOUT_USER,
  }
}

export const getCurrentUserAction = (currentUser) => {
  return {
    type: ActionTypes.GET_CURRENT_USER,
    payload: currentUser
  }
}