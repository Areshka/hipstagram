import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import User from './User';
import Header from '../../components/Header';
import Preloader from '../../components/Preloader/Preloader';
import { WrapperContent } from '../../components/Wrapper/Wrapper'
import { ReactComponent as UsersNotFoundImg } from '../../assets/images/icons/icon_not_user.svg'

import { getUsersThunk } from '../../store/users/thunks';
import { getIsFetchingStateSelector, getUsersStateSelector } from '../../store/users/selectors';

import { NoUsersBlock } from './styled';

const Users = () => {
  const users = useSelector(getUsersStateSelector);
  let isShowPreloader = useSelector(getIsFetchingStateSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersThunk())
  }, [dispatch])

  return (
    <>
      <Header users />
      <WrapperContent>
        {users.length ?
          <div className='users'>
            {users.map(user => <User key={user._id} user={user} />)}
          </div>
          :
          <NoUsersBlock>
            <UsersNotFoundImg />
            <p>Users not found</p>
          </NoUsersBlock>
        }
      </WrapperContent>
      {isShowPreloader && <Preloader />}
    </>
  );
}

export default Users;