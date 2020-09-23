import React from 'react';
import { useSelector } from 'react-redux';

import Auth from '../Auth/Auth';
import NotAuth from '../NotAuth/NotAuth';
import Modal from '../../components/Modal';

import { isOpenModalStateSelector } from '../../store/modal/selectors'

const Application = () => {
  const isOpen = useSelector(isOpenModalStateSelector);
  const isAuth = true;

  return (
    <>
      {isAuth ? <NotAuth /> : <Auth />}
      {isOpen && <Modal message="ASdfghjj" />}
    </>
  );
}

export default Application;