import React from 'react';
import PostsItem from './Post';
import { StyledPosts } from './styled';

const Posts = ({ posts }) => {
  const postElements = posts.reverse().map((post, i) =>
    <PostsItem key={'post' + i} post={post} />
  )

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
