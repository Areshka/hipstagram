import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
import { getCurrentUserSelector } from '../../store/users/selectors';

import ProfileAvatarImg from '../../assets/images/profile-avatar.png';
import ProfileDefaultAvatarImg from '../../assets/images/icons/icon-default-avatar.svg';

const Profile = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUserSelector);
  // const { id, firstName, lastName, avatar, posts } = useSelector(getCurrentUserSelector);
  useEffect(() => {
    console.log(currentUser.posts)

  })

  const openModal = () => {
    dispatch(showModal())
  }

  return (
    <>
      <Header />
      <WrapperContent>
        <ProfileAccount>
          <ProfileAvatar>
            {currentUser.avatar ? <img src={ProfileAvatarImg} alt="" /> : <img src={ProfileDefaultAvatarImg} alt="" />}
          </ProfileAvatar>
          <ProfileInfo>
            <ProfileNumbers>
              <span><strong>2</strong> posts</span>
              <span><strong>300</strong> folowers</span>
              <span><strong>300</strong> folowings</span>
            </ProfileNumbers>
            <DefaultButton type="button" className="btn-profile">Follow</DefaultButton>
            <ProfileText>
              {`${currentUser.firstName} ${currentUser.lastName}`}
            </ProfileText>
          </ProfileInfo>
        </ProfileAccount>

        <Link to='/new_post'>Add new post</Link>

        <Posts>
          {/* {
            posts.map(
              (post, i) =>
                <PostsItem key={'post' + i}>
                  <img src={post.imgUrl} alt="" onClick={openModal} />
                </PostsItem>
            )
          } */}
        </Posts>
      </WrapperContent>
    </>
  );
}

export default Profile;