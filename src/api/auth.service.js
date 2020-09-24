import axios from './axios.instence';

export const loginFetch = async userData => {
  const {data} = await axios.post('/auth/login', userData);
  return data;
}