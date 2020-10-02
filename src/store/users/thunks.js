import { loginFetch, registrationFetch } from '../../api/auth.service';
import {
  createPostFetch,
  currentUserFetch,
  updateCurrentUserFetch,
  updatePasswordFetch
} from '../../api/users.service';
import {
  loginAction,
  logoutAction,
  getCurrentUserAction,
  updateCurrentUserAction,
} from './actions';
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
        onClose: () => redirectToLogin(),
      });
    } catch (error) { }
  }
}

export const loginThunk = (userData) => {
  return async (dispatch) => {
    try {
      const { access_token } = await loginFetch(userData);
      localStorage.setItem('access_token', access_token);
      dispatch(loginAction(access_token))
    } catch (error) { }
  }
}

export const logoutThunk = () => {
  return async (dispatch) => {
    localStorage.removeItem('access_token');
    dispatch(logoutAction())
  }
}

export const currentUserThunk = () => {
  return async (dispatch) => {
    const currentUser = await currentUserFetch();
    dispatch(getCurrentUserAction(currentUser))
  }
}

export const updateCurrentUserThunk = updateUser => {
  return async (dispatch) => {
    try {
      const currentUser = await updateCurrentUserFetch(updateUser);
      dispatch(updateCurrentUserAction(currentUser));
      toast.success('Profile updated', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        transition: Slide,
      });
    } catch (e) {
      console.log(e.response.data)
    }
  }
}

export const updatePasswordThunk = (passwords) => {
  return async (dispatch) => {
    try {
      await updatePasswordFetch(passwords);

      toast.success('Password changed', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        transition: Slide,
        onClose: () => dispatch(logoutThunk())
      });

    } catch (error) { }
  }
}

export const createPostThunk = (formData, redirectToProfile) => {
  return async () => {
    try {
      await createPostFetch(formData);

      toast.success('Post added!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        transition: Slide,
        onClose: () => redirectToProfile(),
      });
    } catch (e) {
      console.log(e.response.data)
    }
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
      dispatch(currentUserThunk())
    } catch (e) { }
  }
}