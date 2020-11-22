import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/Header";
import { WrapperContent } from "../../components/Wrapper/Wrapper";

import { getFeedThunk, getUsersThunk } from "../../store/users/thunks";
import {
  getFeedStateSelector,
  getLoading,
  getUsersStateSelector,
} from "../../store/users/selectors";
import FeedPost from "./FeedPost";
import { FeedContainer } from "./styled";
import { showLoaderAction } from "../../store/users/actions";
import Preloader from "../../components/Preloader/Preloader";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector(getFeedStateSelector);
  const users = useSelector(getUsersStateSelector);

  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(getFeedThunk());
    dispatch(getUsersThunk());
    if (feed.length === 0) dispatch(showLoaderAction);
  }, [dispatch]);

  const feedElements = feed
    .map((post) => <FeedPost key={post._id} post={post} users={users} />)
    .reverse();

  return (
    <>
      <Header title="Feed" />
      <WrapperContent>
        <FeedContainer>
          {loading && <Preloader />}
          {feedElements}
        </FeedContainer>
      </WrapperContent>
    </>
  );
};

export default Feed;
