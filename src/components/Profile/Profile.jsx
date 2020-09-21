import React from 'react';

import Header from '../Header';
import {
  ProfileAccount,
  ProfileAvatar,
  ProfileInfo,
  ProfileNumbers,
  StyledButton,
  ProfileText
} from './styled'
import { WrapperContent } from '../Wrapper/Wrapper';

import ProfileAvatarImg from '../../images/profile-avatar.png';
import ProfileImg1 from '../../images/profile-image-1.jpg';
import ProfileImg2 from '../../images/profile-image-2.jpg';
import ProfileImg3 from '../../images/profile-image-3.jpg';
import ProfileImg4 from '../../images/profile-image-4.jpg';
import ProfileImg5 from '../../images/profile-image-5.jpg';
import ProfileImg6 from '../../images/profile-image-6.jpg';

const Profile = () => {
  return (
    <>
      <Header />
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
            <StyledButton type="button" title="Follow" className='btn btn-follow' />
            <ProfileText>
              Not 23, not designer, not from California
            </ProfileText>
          </ProfileInfo>
        </ProfileAccount>
        <div>
          <img src={ProfileImg1} alt="" />
          <img src={ProfileImg2} alt="" />
          <img src={ProfileImg3} alt="" />
          <img src={ProfileImg4} alt="" />
          <img src={ProfileImg5} alt="" />
          <img src={ProfileImg6} alt="" />
        </div>
      </WrapperContent>
    </>
  );
}

export default Profile;