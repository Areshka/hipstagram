import { loginFetch, registrationFetch } from '../../api/auth.service';
import { loginAction, logoutAction } from './actions';
import { toast, Slide } from "react-toastify";

export const registrationThunk = (userData, redirectToLogin) => {
  return async () => {
    try {
      await registrationFetch(userData);

      toast.success('Registration success', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        transition: Slide,
      });

      redirectToLogin();
    } catch (error) { }
  }
}

export const loginThunk = (userData) => {
  return async (dispatch) => {
    try {
      const { access_token } = await loginFetch(userData);
      localStorage.setItem('access_token', access_token);
      dispatch(loginAction(access_token))
    } catch (error) {}
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