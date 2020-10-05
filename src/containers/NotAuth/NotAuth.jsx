import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import NotAuthRouter from './NotAuthRouter';

import { getCurrentUserThunk } from '../../store/users/thunks';

const NotAuth = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserThunk());
  }, [dispatch])

  return (
    <NotAuthRouter />
  );
}

export default NotAuth;