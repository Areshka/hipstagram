import axios from './axios.instence';

export const getCurrentUserFetch = async () => {
  const { data } = await axios.get('/users/current');
  return data;
}

export const updateCurrentUserFetch = async updateUser => {
  const { data } = await axios.patch('/users', updateUser);
  return data;
}

export const updatePasswordFetch = async passwords => {
  const { data } = await axios.post('/auth/updatePassword', passwords);
  return data;
}

export const createPostFetch = async formData => {
  const { data } = await axios.post('/posts', formData);
  return data;
}

export const getUsersFetch = async () => {
  const { data } = await axios.get('/users');
  return data;
}