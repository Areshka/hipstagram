
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FormInput from '../FormInput';

import { hideModal } from '../../store/modal/actions';
import { getUserByIdThunk } from '../../store/users/thunks';
import {
  getPostByIdStateSelector,
  getUserByIdStateSelector
} from '../../store/users/selectors';

import { ReactComponent as IconLikeFalse } from '../../assets/images/icons/icon-like.svg';
import { ReactComponent as IconLikeTrue } from '../../assets/images/icons/icon-like2.svg';
import { ReactComponent as IconSend } from '../../assets/images/icons/icon-send.svg';

import {
  StyledModal,
  StyledModalContent,
  StyledModalClose,
  StyledModalBody,
  StyledUserBlock,
  StyledPostImg,
  StyledUserInfo,
  StyledPostTitle,
  StyledUserAction,
  StyledButton,
  FormComment,
  StyledCommets
} from './styled';

const Modal = () => {
  const dispatch = useDispatch()
  const [isLike, setIsLike] = useState(false);
  const post = useSelector(getPostByIdStateSelector);
  const user = useSelector(getUserByIdStateSelector);

  const handleSetLike = () => {
    setIsLike(!isLike);
  }

  useEffect(() => {
    if (post.ownerId) {
      dispatch(getUserByIdThunk(post.ownerId));
    }
  }, [post.ownerId, dispatch])

  const closeModal = (e) => {
    if (e.target.getAttribute("id") === "modal") {
      dispatch(hideModal())
    }
  }

  return (
    <StyledModal id='modal' onClick={closeModal}>
      <StyledModalContent>

        <div className="modal-header">
          <StyledModalClose onClick={() => dispatch(hideModal())}>
            &times;
          </StyledModalClose>
        </div>

        <StyledModalBody>
          <StyledPostImg>
            <img src={post.imgUrl} alt="" />
          </StyledPostImg>

          <StyledUserBlock>
            <StyledUserInfo>
              <img src={user.avatar} alt="avatar" />
              <span>{user.login}</span>
            </StyledUserInfo>

            <StyledPostTitle>
              {post.title || 'No title'}
            </StyledPostTitle>

            <StyledCommets></StyledCommets>

            <StyledUserAction>
              {!isLike ?
                <IconLikeFalse className="icon icon-like" onClick={handleSetLike} /> :
                <IconLikeTrue className="icon icon-like" onClick={handleSetLike} />
              }
              <IconSend className="icon icon-send" />
              <span>Likes <strong>johny_sins</strong> and <strong>200</strong> other...</span>
            </StyledUserAction>

            <FormComment>
              <FormInput
                className="comment"
                type="text"
                name="comment"
                placeholder="Add comment ..."
              />
              <StyledButton>Send</StyledButton>
            </FormComment>

          </StyledUserBlock>

        </StyledModalBody>

      </StyledModalContent>
    </StyledModal>
  )
}

export default Modal;