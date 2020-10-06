import React from 'react';

import LikesBlock from '../../../modules/LikesBlock';

import { StyledFeedPost, StyledFeedPostTitle } from './styled';

const FeedPost = ({ post }) => {

  return (
    <StyledFeedPost>
      <div>
        <img src={post.imgUrl} alt="" />
      </div>
      <StyledFeedPostTitle>
        <strong className="login">login</strong>
        <span>{post.title}</span>
      </StyledFeedPostTitle>

      <LikesBlock post={post} />

    </StyledFeedPost>
  );
}

export default FeedPost;