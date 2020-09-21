import React, { useState } from 'react';

import { FollowButton } from '../../Button/Button';
import UserAvatar from '../../../images/user_alexa.png';

import './style.scss';

const User = () => {
  const [isFollow, setIsFollow] = useState(false);

  const handleClick = () => {
    setIsFollow(!isFollow);
  }

  console.log(isFollow);

  return (
    <article className="user__item">
      <div className="user__info">
        <div className="user__avatar">
          <img src={UserAvatar} alt="" />
        </div>
        <h3 className="user__name">alexa_blie</h3>
      </div>
      <FollowButton
        isFollow={isFollow}
        title={isFollow ? "UnFollow" : "Follow"}
        handleClick={handleClick}
      />
    </article>
  )
}

export default User;