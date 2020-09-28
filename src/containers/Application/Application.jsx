import React from 'react';
import { useSelector } from 'react-redux';

import Auth from '../Auth/Auth';
import NotAuth from '../NotAuth/NotAuth';
import Modal from '../../components/Modal';

import { getAuthStatusSelector } from '../../store/users/selectors';
import { isOpenModalStateSelector } from '../../store/modal/selectors'

const Application = () => {
  const isOpen = useSelector(isOpenModalStateSelector);
  const isAuth = useSelector(getAuthStatusSelector);

  return (
    <>
      {isAuth ? <NotAuth /> : <Auth />}
      {isOpen && <Modal message="ASdfghjj" />}
    </>
  );
}

export default Application;