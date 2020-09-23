import React from 'react';
import { useSelector } from 'react-redux';

import Modal from '../../components/Modal';
import Header from '../../components/Header';
import NotAuthRouter from './NotAuthRouter';

import { isOpenModalStateSelector } from '../../store/modal/selectors'

const NotAuth = () => {
  const isOpen = useSelector(isOpenModalStateSelector);

  return (
    <>
      <Header />
      <NotAuthRouter />
      {isOpen && <Modal message="ASdfghjj" />}
    </>
  );
}

export default NotAuth;