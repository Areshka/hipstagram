import React from 'react';
import { Link } from 'react-router-dom';

import LikesBlock from '../../../modules/LikesBlock';

import { StyledFeedPost, StyledFeedPostTitle } from './styled';

const FeedPost = ({ post, users }) => {

  const getLogin = () => {
    let login = '';
    users.forEach(user => {
      if (user._id === post.ownerId) {        
        login = user.login
      }
    })
    return login;
  }

  return (
    <StyledFeedPost>
      <div>
        <img src={post.imgUrl} alt="" />
      </div>
      <StyledFeedPostTitle>
        <Link to={'/profile/' + post.ownerId}>
          <strong className="login">{getLogin()}</strong>
        </Link>
        <span>{post.title}</span>
      </StyledFeedPostTitle>

      <LikesBlock post={post} />

    </StyledFeedPost>
  );
}

export default FeedPost;