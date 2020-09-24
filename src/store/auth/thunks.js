import { loginFetch } from '../../api/auth.service';
import { loginAction, logoutAction } from './actions';

export const loginThunk = (userData) => {
  return async (dispatch) => {
    const { access_token } = await loginFetch(userData);
    localStorage.setItem('access_token', access_token);
    dispatch(loginAction(access_token))
  }
}

export const logoutThunk = () => {
  return async (dispatch) => {
    localStorage.removeItem('access_token');
    dispatch(logoutAction())
  }
}

export const initThunk = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
        return dispatch(logoutThunk())
      }
      dispatch(loginAction(token))
    } catch (e) {

    }
  }
}