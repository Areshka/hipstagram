import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Posts from '../../modules/Posts';
import Header from '../../components/Header';
import { DefaultButton } from '../../components/Button/Button';
import { WrapperContent } from '../../components/Wrapper/Wrapper';

import {
  getCurrentUserSelector,
  getIsFetchingStateSelector,
  getUserByIdStateSelector
} from '../../store/users/selectors';

import { getUserByIdThunk } from '../../store/users/thunks';

import ProfileDefaultAvatarImg from '../../assets/images/icons/icon-default-avatar.svg';

import {
  ProfileAccount,
  ProfileAvatar,
  ProfileInfo,
  ProfileNumbers,
  ProfileText,
} from './styled';
import Preloader from '../../components/Preloader/Preloader';

const Profile = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isShowPreloader = useSelector(getIsFetchingStateSelector);
  const { id } = useSelector(getCurrentUserSelector);
  const { firstName, lastName, avatar, posts, followersCount, followingsCount } = useSelector(getUserByIdStateSelector);

  const getUserId = () => {
    let userId;
    if (pathname === '/profile') {
      userId = id;
    } else {
      userId = pathname.replace('/profile/', '');
    }
    return userId;
  }

  const userId = getUserId();

  useEffect(() => {
    if (userId) {
      dispatch(getUserByIdThunk(userId));
    }
    return
  }, [userId, dispatch])

  return (
    <>
      <Header />
      <WrapperContent>
        <ProfileAccount>
          <ProfileAvatar>
            {<img src={avatar ? avatar : ProfileDefaultAvatarImg} alt="" />}
          </ProfileAvatar>
          <ProfileInfo>
            <ProfileNumbers>
              <span><strong>{posts.length}</strong> posts</span>
              <span><strong>{followersCount}</strong> followers</span>
              <span><strong>{followingsCount}</strong> followings</span>
            </ProfileNumbers>
            <DefaultButton type="button" className="btn-profile">Follow</DefaultButton>
            <ProfileText>
              {`${firstName || 'No firsName'} ${lastName || 'No lastName'}`}
            </ProfileText>
          </ProfileInfo>
        </ProfileAccount>

        <Link to='/new_post'>Add new post</Link>

        <Posts posts={posts} />

      </WrapperContent>
      {isShowPreloader && <Preloader />}
    </>
  );
}

export default Profile;