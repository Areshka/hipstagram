import React from 'react';
import PostsItem from './Post';
import { StyledPosts } from './styled';

const Posts = ({ posts }) => {
  const postElements = posts.map((post, i) =>
    <PostsItem key={'post' + i} post={post} />
  ).reverse()

  return (
    <>
      {postElements.length ?
        <StyledPosts>
          {postElements}
        </StyledPosts> :
        <p>No posts</p>
      }
    </>
  );
}

export default Posts;
