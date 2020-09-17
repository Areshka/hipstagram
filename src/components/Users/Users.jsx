import React from 'react';

import User from './User';
import Header from '../Header';
import { WrapperContent } from '../Wrapper/Wrapper'
import { ReactComponent as UsersNotFound } from '../../images/icon_not_user.svg'

import './style.scss';

const Users = () => {
  const users = [
    {
      name: "Petya",
    }
  ]

  return (
    <>
      <Header />
      <WrapperContent>
        {users.length ?
          <div className='users'>
            <User />
            <User />
            <User />
          </div>
          :
          <div className='not-users'>
            <UsersNotFound />
            <p>Users not found</p>
          </div>
        }
      </WrapperContent>
    </>
  );
}

export default Users;