import React, { useState } from 'react';

import { DefaultButton } from '../../../components/Button/Button';
import { ReactComponent as DefaultAvatarImg } from '../../../assets/images/icons/icon-default-avatar.svg';

import {
  UserInfo,
  UserItem,
  UserAvatar,
  UserName
} from './styled';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
  const [isFollow, setIsFollow] = useState(false);

  const handleClick = () => {
    setIsFollow(!isFollow);
  }

  return (
    <UserItem>
      <Link to={'/profile/' + user._id}>
        <UserInfo>
          <UserAvatar>
            {user.avatar ? <img src={user.avatar} alt="" /> : <DefaultAvatarImg />}
          </UserAvatar>

          <UserName>
            {user.login}
          </UserName>
        </UserInfo>
      </Link>

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