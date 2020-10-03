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

export const getCurrentUserAction = currentUser => {
  return {
    type: ActionTypes.ADD_CURRENT_USER,
    payload: currentUser
  }
}

export const updateCurrentUserAction = currentUser => {
  return {
    type: ActionTypes.UPDATE_CURRENT_USER,
    payload: currentUser
  }
}

export const createPostAction = post => {
  return {
    type: ActionTypes.CREATE_POST,
    payload: post
  }
}

export const getUsersAction = users => {
  return {
    type: ActionTypes.GET_USERS,
    payload: users
  }
}

export const getUserByIdAction = user => {
  return {
    type: ActionTypes.GET_USER_BY_ID,
    payload: user
  }
}