import React from 'react';

import Button from '../../Button';
import UserAvatar from '../../../images/user_alexa.png';

import './style.scss';


const User = () => {
  return (
    <article className="user__item">
      <div className="user__info">
        <div className="user__avatar">
          <img src={UserAvatar} alt="" />
        </div>
        <h3 className="user__name">alexa_blie</h3>
      </div>
      <Button className="btn btn-follow" title="Follow" />
    </article>
  )
}

export default User;