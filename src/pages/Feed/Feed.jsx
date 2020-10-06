import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header';
import { WrapperContent } from '../../components/Wrapper/Wrapper';

import { getFeedThunk } from '../../store/users/thunks';
import { getFeedStateSelector } from '../../store/users/selectors';
import FeedPost from './FeedPost';
import { FeedContainer } from './styled';

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector(getFeedStateSelector);

  useEffect(() => {
    dispatch(getFeedThunk());
  }, [dispatch])

  const feedElements = feed.map(post => <FeedPost key={post._id} post={post} />).reverse();

  return (
    <>
      <Header />
      <WrapperContent>
        <FeedContainer>
          {feedElements}
        </FeedContainer>
      </WrapperContent>
    </>
  );
}

export default Feed;