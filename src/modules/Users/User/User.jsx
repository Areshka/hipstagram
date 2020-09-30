import React, { useState } from 'react';

import { DefaultButton } from '../../../components/Button/Button';
import UserAvatarImg from '../../../assets/images/user_alexa.png';

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

  return (
    <UserItem>
      <UserInfo>
        <UserAvatar>
          <img src={UserAvatarImg} alt="" />
        </UserAvatar>
        <UserName>alexa_blue</UserName>
      </UserInfo>
      <DefaultButton
        className="btn-follow"
        isFollow={isFollow}
        handleClick={handleClick}
      >
        {isFollow ? "UnFollow" : "Follow"}
      </DefaultButton>
    </UserItem>
  )
}

export default User;