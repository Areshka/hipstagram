import React, { useState } from 'react';

import { FollowButton } from '../../Button/Button';
import UserAvatarImg from '../../../images/user_alexa.png';

import {
  UserInfo,
  UserItem,
  UserAvatar,
  UserName
} from './styled';

const User = () => {
  const [isFollow, setIsFollow] = useState(false);

  const handleClick = () => {
    setIsFollow(!isFollow);
  }

  console.log(isFollow);

  return (
    <UserItem>
      <UserInfo>
        <UserAvatar>
          <img src={UserAvatarImg} alt="" />
        </UserAvatar>
        <UserName>alexa_blue</UserName>
      </UserInfo>
      <FollowButton
        isFollow={isFollow}
        title={isFollow ? "UnFollow" : "Follow"}
        handleClick={handleClick}
      />
    </UserItem>
  )
}

export default User;