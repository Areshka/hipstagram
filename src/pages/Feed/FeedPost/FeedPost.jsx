import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as IconLikeFalse } from '../../../assets/images/icons/icon-like.svg';
import { ReactComponent as IconLikeTrue } from '../../../assets/images/icons/icon-like2.svg';
import { ReactComponent as IconSend } from '../../../assets/images/icons/icon-send.svg';
import { getCurrentUserSelector } from '../../../store/users/selectors';
import { likePostThunk } from '../../../store/users/thunks';

import { StyledFeedPost, StyledFeedPostTitle, StyledUserAction } from './styled';

const FeedPost = ({ post }) => {
  const dispatch = useDispatch();
  const [isLike, setIsLike] = useState(false);
  const { id: currentUserId } = useSelector(getCurrentUserSelector);

  useEffect(() => {
    post.likes.forEach(like => {
      like._id === currentUserId && setIsLike(true)
    })
  }, [post.likes, currentUserId]);

  const handleSetLike = () => {
    dispatch(likePostThunk(post._id))
    setIsLike(!isLike);
  }

  const lastLikeUserLogin = post.likes.length && post.likes[post.likes.length - 1].login;

  return (
    <StyledFeedPost>
      <div>
        <img src={post.imgUrl} alt="" />
      </div>
      <StyledFeedPostTitle>
        <strong className="login">login</strong>
        <span>{post.title}</span>
      </StyledFeedPostTitle>
      <StyledUserAction>
        {!isLike ?
          <IconLikeFalse className="icon icon-like" onClick={handleSetLike} /> :
          <IconLikeTrue className="icon icon-like" onClick={handleSetLike} />
        }
        <IconSend className="icon icon-send" />
        <span>Likes <strong>{lastLikeUserLogin} </strong>
        and <strong>{post.likes.length}</strong> other...</span>
      </StyledUserAction>

    </StyledFeedPost>
  );
}

export default FeedPost;