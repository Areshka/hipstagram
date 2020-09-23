import React from 'react';
import { useDispatch } from 'react-redux';

import {
  ProfileAccount,
  ProfileAvatar,
  ProfileInfo,
  ProfileNumbers,
  ProfileText
} from './styled'
import { FollowButton } from '../Button/Button';
import { WrapperContent } from '../Wrapper/Wrapper';
import { showModal } from '../../store/modal/actions';

import ProfileAvatarImg from '../../images/profile-avatar.png';
import ProfileImg1 from '../../images/profile-image-1.jpg';
import ProfileImg2 from '../../images/profile-image-2.jpg';
import ProfileImg3 from '../../images/profile-image-3.jpg';
import ProfileImg4 from '../../images/profile-image-4.jpg';
import ProfileImg5 from '../../images/profile-image-5.jpg';
import ProfileImg6 from '../../images/profile-image-6.jpg';

const Profile = () => {
  const dispatch = useDispatch()

  const openModal = () => {
    dispatch(showModal())
  }

  return (
    <WrapperContent>
      <ProfileAccount>
        <ProfileAvatar>
          <img src={ProfileAvatarImg} alt="" />
        </ProfileAvatar>
        <ProfileInfo>
          <ProfileNumbers>
            <span><strong>2</strong> posts</span>
            <span><strong>300</strong> folowers</span>
            <span><strong>300</strong> folowings</span>
          </ProfileNumbers>
          <FollowButton profile='true' type="button" title="Follow" />
          <ProfileText>
            Not 23, not designer, not from California
          </ProfileText>
        </ProfileInfo>
      </ProfileAccount>
      <div>
        <img src={ProfileImg1} alt="" onClick={openModal} />
        <img src={ProfileImg2} alt="" />
        <img src={ProfileImg3} alt="" />
        <img src={ProfileImg4} alt="" />
        <img src={ProfileImg5} alt="" />
        <img src={ProfileImg6} alt="" />
      </div>
    </WrapperContent>
  );
}

export default Profile;