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
  StyledAddPostBtn,
} from './styled';
// import Preloader from '../../components/Preloader/Preloader';

//* custom useProfile hook
const useProfile = () => {
  const [isFollow, setIsFollow] = useState(false);
  const dispatch = useDispatch();
  let { id: userId } = useParams();
  const { pathname } = useLocation();
  const isShowPreloader = useSelector(getIsFetchingStateSelector);
  const { id: currentId, following } = useSelector(getCurrentUserSelector);
  const { firstName, lastName, avatar, posts, followersCount, followingsCount } = useSelector(getUserByIdStateSelector);

  let id = pathname === '/profile' ? currentId : userId;;

  useEffect(() => {
    if (id) {
      dispatch(getUserByIdThunk(id));
    }
  }, [id, dispatch])

  useEffect(() => {
    following.forEach(follow => {
      follow.id === id && setIsFollow(true)
    })
  }, [following, id]);

  const handleClick = () => {
    dispatch(followUserThunk(id))
    setIsFollow(!isFollow);
  }

  return {
    avatar,
    firstName,
    lastName,
    posts,
    followersCount,
    followingsCount,
    isFollow,
    userId,
    handleClick,
    isShowPreloader,
    id
  }
}

//* function componnent Profie
const Profile = () => {
  const { avatar, firstName, lastName, posts, followersCount, followingsCount, isFollow, userId, id, handleClick } = useProfile()

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
              <span>
                <Link to={'/followers/' + id}>
                  <strong>{followersCount}</strong> followers
                </Link>
              </span>
              <span>
                <Link to={'/followings/' + id}>
                  <strong>{followingsCount}</strong> followings
                </Link>
              </span>
            </ProfileNumbers>

            {userId && <DefaultButton
              isFollow={isFollow}
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

        <StyledAddPostBtn>
          <Link to='/new_post'>Add new post</Link>
        </StyledAddPostBtn>

        <Posts posts={posts} />

      </WrapperContent>
      {/* {isShowPreloader && <Preloader />} */}
    </>
  );
}

export default Profile;