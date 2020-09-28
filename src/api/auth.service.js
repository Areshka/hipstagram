import axios from './axios.instence';
import { toast, Slide } from "react-toastify";

import store from '../store/store';
import { logoutThunk } from '../store/users/thunks';

axios.interceptors.request.use(
  function (config) {
    config.headers = {
      ...config.headers,
      Authorization: localStorage.getItem('access_token'),
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    toast.error(error.response.data, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      transition: Slide,
    });
    store.dispatch(logoutThunk());
    return Promise.reject(error);
  }
);

export const loginFetch = async userData => {
  const { data } = await axios.post('/auth/login', userData);
  return data;
}

export const registrationFetch = async userData => {
  const { data } = await axios.post('/auth/registration', userData);
  return data;
}