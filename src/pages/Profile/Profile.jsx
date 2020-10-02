import React from 'react';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  ProfileAccount,
  ProfileAvatar,
  ProfileInfo,
  ProfileNumbers,
  ProfileText,
  Posts,
  PostsItem
} from './styled'

import Header from '../../components/Header';
import { DefaultButton } from '../../components/Button/Button';
import { WrapperContent } from '../../components/Wrapper/Wrapper';

import { showModal } from '../../store/modal/actions';
import { getCurrentUserSelector, getUsersStateSelector } from '../../store/users/selectors';

import ProfileAvatarImg from '../../assets/images/profile-avatar.png';
import ProfileDefaultAvatarImg from '../../assets/images/icons/icon-default-avatar.svg';

const Profile = () => {
  const { firstName, lastName, avatar, posts } = useSelector(getCurrentUserSelector);
  const users = useSelector(getUsersStateSelector);
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const id = pathname.replace('/profile/', '');
  const user = users.find(user => user._id === id);  

  const openModal = () => {
    dispatch(showModal())
  }

  const postsList = posts || [];
  const postsElements = postsList.map((post, i) => <PostsItem key={'post' + i}><img src={post.imgUrl} alt="" onClick={openModal} /></PostsItem>)


  return (
    <>
      <Header />
      <WrapperContent>
        <ProfileAccount>
          <ProfileAvatar>
            {avatar ? <img src={ProfileAvatarImg} alt="" /> : <img src={ProfileDefaultAvatarImg} alt="" />}
          </ProfileAvatar>
          <ProfileInfo>
            <ProfileNumbers>
              <span><strong>2</strong> posts</span>
              <span><strong>300</strong> followers</span>
              <span><strong>300</strong> followings</span>
            </ProfileNumbers>
            <DefaultButton type="button" className="btn-profile">Follow</DefaultButton>
            <ProfileText>
              {`${firstName} ${lastName}`}
            </ProfileText>
          </ProfileInfo>
        </ProfileAccount>

        <Link to='/new_post'>Add new post</Link>

        <Posts>
          {postsElements}
        </Posts>
      </WrapperContent>
    </>
  );
}

export default Profile;