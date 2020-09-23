import React from 'react';
import { useSelector } from 'react-redux';

import Modal from '../../components/Modal';
import Header from '../../components/Header';
import ApplicationRouter from './ApplicationRouter';

import { isOpenModalStateSelector } from '../../store/modal/selectors'

const Application = () => {
  const isOpen = useSelector(isOpenModalStateSelector);

  return (
    <>
      <Header />
      <ApplicationRouter />
      {isOpen && <Modal message="ASdfghjj" />}
    </>
  );
}

export default Application;