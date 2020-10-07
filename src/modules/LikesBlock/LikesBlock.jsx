import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as IconSend } from '../../assets/images/icons/icon-send.svg';
import { ReactComponent as IconLikeTrue } from '../../assets/images/icons/icon-like2.svg';
import { ReactComponent as IconLikeFalse } from '../../assets/images/icons/icon-like.svg';

import { StyledLikesBlock } from './style';
import { getUserByIdThunk, likePostThunk } from '../../store/users/thunks';
import { getCurrentUserSelector } from '../../store/users/selectors';

// custom useLikesBlock Hook
const useLikesBlock = (post) => {
  const dispatch = useDispatch();
  const [isLike, setIsLike] = useState(false);
  const { id: currentUserId } = useSelector(getCurrentUserSelector);

  post.likes = post.likes || [];

  useEffect(() => {
    post.likes.forEach(like => {
      like._id === currentUserId && setIsLike(true)
    })    
  }, [post.likes, currentUserId]);

  const handleSetLike = () => {
    dispatch(likePostThunk(post._id))
    setIsLike(!isLike);
    dispatch(getUserByIdThunk(post.ownerId))
  }

  const lastLikeUserLogin = post.likes.length && post.likes[post.likes.length - 1].login;

  return { isLike, handleSetLike, lastLikeUserLogin }
}

// function component
const LikesBlock = ({ post }) => {
  const { isLike, handleSetLike, lastLikeUserLogin } = useLikesBlock(post);

  return (
    <StyledLikesBlock>
      {!isLike ?
        <IconLikeFalse className="icon icon-like" onClick={handleSetLike} /> :
        <IconLikeTrue className="icon icon-like" onClick={handleSetLike} />
      }
      <IconSend className="icon icon-send" />
      <span>Likes <strong>{lastLikeUserLogin} </strong>
        {post.likes.length > 1 ? `and ${post.likes.length - 1} other...` : null}
      </span>
    </StyledLikesBlock>
  );
}

export default LikesBlock;