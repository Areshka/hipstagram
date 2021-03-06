import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { DefaultButton } from '../../../components/Button/Button';
import { ReactComponent as DefaultAvatarImg } from '../../../assets/images/icons/icon-default-avatar.svg';

import {
  UserInfo,
  UserItem,
  UserAvatar,
  UserName
} from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { followUserThunk } from '../../../store/users/thunks';
import { useEffect } from 'react';
import { getCurrentUserSelector } from '../../../store/users/selectors';

// custom useUser Hook
const useUser = (user) => {
  const [isFollow, setIsFollow] = useState(false);
  const dispatch = useDispatch()
  let { following } = useSelector(getCurrentUserSelector);

  useEffect(() => {
    following.forEach(follow => {
      follow.id === user._id && setIsFollow(true)
    })
  }, [following, user._id]);

  const handleClickFollow = () => {
    dispatch(followUserThunk(user._id))
    setIsFollow(!isFollow);
  }

  return { isFollow, handleClickFollow }
}

const User = ({ user }) => {
  const { isFollow, handleClickFollow } = useUser(user);

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
        handleClick={handleClickFollow}
      >
        {isFollow ? "UnFollow" : "Follow"}
      </DefaultButton>
    </UserItem>
  )
}

export default User;