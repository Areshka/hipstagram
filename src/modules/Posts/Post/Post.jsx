import React from 'react';
import { useDispatch } from 'react-redux';

import { showModal } from '../../../store/modal/actions';
import { getPostByIdThunk } from '../../../store/users/thunks';
import { StyledPostsItem } from './styled';

const PostsItem = ({ post }) => {
  const dispatch = useDispatch();

  const handlerSetPost = (postId) => {
    dispatch(getPostByIdThunk(postId));
    dispatch(showModal());
  }

  return (
    <StyledPostsItem onClick={() => handlerSetPost(post._id)}>
      <img src={post.imgUrl} alt="" />
    </StyledPostsItem>
  );
}

export default PostsItem;
