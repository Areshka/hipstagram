import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import FormInput from "../FormInput";
import LikesBlock from "../../modules/LikesBlock";

import { hideModal } from "../../store/modal/actions";
import { getUserByIdThunk } from "../../store/users/thunks";
import {
  getLoading,
  getPostByIdStateSelector,
  getUserByIdStateSelector,
} from "../../store/users/selectors";

import {
  StyledModal,
  StyledModalContent,
  StyledModalClose,
  StyledModalBody,
  StyledUserBlock,
  StyledPostImg,
  StyledUserInfo,
  StyledPostTitle,
  StyledButton,
  FormComment,
  StyledCommets,
} from "./styled";
import { showLoaderAction } from "../../store/users/actions";
import Preloader from "../Preloader/Preloader";

// custom useModal Hook
const useModal = () => {
  const dispatch = useDispatch();

  const post = useSelector(getPostByIdStateSelector);
  const user = useSelector(getUserByIdStateSelector);
  const loading = useSelector(getLoading);

  useEffect(() => {
    if (post.ownerId) {
      dispatch(getUserByIdThunk(post.ownerId));
      dispatch(showLoaderAction());
    }
  }, [post.ownerId, dispatch]);

  const closeModal = (e) => {
    if (e.target.getAttribute("id") === "modal") {
      dispatch(hideModal());
    }
  };
  return { post, user, closeModal, dispatch, loading };
};

// Function Element
const Modal = () => {
  const { post, user, closeModal, dispatch, loading } = useModal();

  return (
    <StyledModal id="modal" onClick={closeModal}>
      <StyledModalContent>
        <div className="modal-header">
          <StyledModalClose onClick={() => dispatch(hideModal())}>
            &times;
          </StyledModalClose>
        </div>

        <StyledModalBody>
          <StyledPostImg>
            {loading ? <Preloader /> : <img src={post.imgUrl} alt="Post" />}            
          </StyledPostImg>

          <StyledUserBlock>
            <StyledUserInfo>
              <img src={user.avatar} alt="avatar" />
              <span>{user.login}</span>
            </StyledUserInfo>

            <StyledPostTitle>{post.title || "No title"}</StyledPostTitle>

            <StyledCommets></StyledCommets>

            <LikesBlock post={post} />

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
  );
};

export default Modal;
