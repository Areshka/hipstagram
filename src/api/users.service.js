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

export const getPostByIdFetch = async postId => {
  const { data } = await axios.get('/posts/' + postId);
  return data;
}

export const getUsersFetch = async () => {
  const { data } = await axios.get('/users');
  return data;
}

export const getUserByIdFetch = async (userId) => {
  const { data } = await axios.get('/users/' + userId);
  return data;
}

export const getUsersByLoginFetch = async (login) => {
  const { data } = await axios.get('/users/', { params: { search: login } });
  return data;
}