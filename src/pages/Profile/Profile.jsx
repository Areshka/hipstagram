import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
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

import { followUserThunk, getUserByIdThunk } from '../../store/users/thunks';

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
  const [isFollow, setIsFollow] = useState(false);
  const dispatch = useDispatch();
  const isShowPreloader = useSelector(getIsFetchingStateSelector);
  let { id: userId } = useParams();
  const { pathname } = useLocation()
  const { id: currentId } = useSelector(getCurrentUserSelector);
  const { firstName, lastName, avatar, posts, followersCount, followingsCount } = useSelector(getUserByIdStateSelector);

  let id = pathname === '/profile' ? currentId : userId;;

  useEffect(() => {
    if (id) {
      dispatch(getUserByIdThunk(id));
    }
    return
  }, [id, dispatch])


  let { following } = useSelector(getCurrentUserSelector);

  useEffect(() => {
    following.forEach(follow => {
      follow.id === id && setIsFollow(true)
    })
  }, [following, id]);

  const handleClick = () => {
    dispatch(followUserThunk(id))
    setIsFollow(!isFollow);
  }

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

            {userId && <DefaultButton
              type="button"
              className="btn-profile"
              handleClick={handleClick}
            >
              {isFollow ? "UnFollow" : "Follow"}
            </DefaultButton>
            }

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