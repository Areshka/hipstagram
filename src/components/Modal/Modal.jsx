
import React from 'react'
import { useDispatch } from 'react-redux';
import { hideModal } from '../../store/modal/actions';
import { StyledModal, StyledModalContent, StyledModalClose } from './styled';

const Modal = ({ message }) => {
  const dispatch = useDispatch()

  const closeModal = (e) => {
    console.dir(e.target)
    if (e.target.classList.contains("gsXgVk")) {
      dispatch(hideModal())
    }
  }

  return (
    <StyledModal onClick={closeModal}>
      <StyledModalContent>
        <div className="modal-header">
          <StyledModalClose onClick={() => dispatch(hideModal())}>
            &times;
          </StyledModalClose>
        </div>
        <div className="modal-body">
          <p>{message}</p>
        </div>
      </StyledModalContent>
    </StyledModal>
  )
}

export default Modal;