import axios from './axios.instence';

export const currentUserFetch = async () => {
  const { data } = await axios.get('/users/current');
  return data;
}