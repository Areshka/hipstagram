import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header';
import { DefaultButton } from '../../components/Button/Button';
import { WrapperContent } from '../../components/Wrapper/Wrapper';

import {
  getCurrentUserSelector,
  getUserByIdStateSelector
} from '../../store/users/selectors';
import { showModal } from '../../store/modal/actions';
import { getUserByIdThunk } from '../../store/users/thunks';

import ProfileDefaultAvatarImg from '../../assets/images/icons/icon-default-avatar.svg';

import {
  ProfileAccount,
  ProfileAvatar,
  ProfileInfo,
  ProfileNumbers,
  ProfileText,
  Posts,
  PostsItem
} from './styled';

const Profile = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
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
  }, [userId, dispatch])


  const openModal = () => {
    dispatch(showModal())
  }

  const postsFix = posts || [];
  const postsElements = postsFix.map((post, i) =>
    <PostsItem key={'post' + i}>
      <img src={post.imgUrl} alt="" onClick={openModal} />
    </PostsItem>
  )

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
              <span><strong>{postsFix.length}</strong> posts</span>
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

        {postsElements.length ?
          <Posts>
            {postsElements}
          </Posts> :
          <p>No posts</p>
        }
      </WrapperContent>
    </>
  );
}

export default Profile;