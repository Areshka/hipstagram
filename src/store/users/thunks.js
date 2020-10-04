import { loginFetch, registrationFetch } from '../../api/auth.service';
import {
  createPostFetch,
  getCurrentUserFetch,
  getUserByIdFetch,
  getUsersByLoginFetch,
  getUsersFetch,
  updateCurrentUserFetch,
  updatePasswordFetch,
  getPostByIdFetch
} from '../../api/users.service';
import {
  loginAction,
  logoutAction,
  getCurrentUserAction,
  updateCurrentUserAction,
  getUsersAction,
  getUserByIdAction,
  togglePreloaderAction,
  getPostByIdAction
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

export const getCurrentUserThunk = () => {
  return async (dispatch) => {
    dispatch(togglePreloaderAction(true))
    try {
      const currentUser = await getCurrentUserFetch();
      dispatch(getCurrentUserAction(currentUser))
      dispatch(togglePreloaderAction(false))
    } catch (e) { }
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
    } catch (e) { }
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

export const createPostThunk = ({ formData, redirectToProfile }) => {
  return async () => {
    try {
      await createPostFetch(formData);
      redirectToProfile()
    } catch (e) { }
  }
}

export const getPostByIdThunk = (postId) => {
  return async (dispatch) => {
    try {
      const post = await getPostByIdFetch(postId);
      dispatch(getPostByIdAction(post));
    } catch (e) { }
  }
}

export const getUsersThunk = () => {
  return async (dispatch) => {
    dispatch(togglePreloaderAction(true))
    try {
      const users = await getUsersFetch();
      dispatch(getUsersAction(users))
      dispatch(togglePreloaderAction(false))
    } catch (e) {

    }
  }
}

export const getUserByIdThunk = userId => {
  return async (dispatch) => {
    const user = await getUserByIdFetch(userId);
    dispatch(getUserByIdAction(user))
  }
}

export const getUsersByLoginThunk = login => {
  return async (dispatch) => {
    try {
      const users = await getUsersByLoginFetch(login);
      dispatch(getUsersAction(users))
    } catch (e) { }
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
      dispatch(getCurrentUserThunk())
    } catch (e) { }
  }
}