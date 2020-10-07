import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logoutThunk, getUsersByLoginThunk } from '../../store/users/thunks';
import { getUserByIdStateSelector, getUsersStateSelector } from '../../store/users/selectors';

import FormInput from '../FormInput';
import { Wrapper } from '../Wrapper/Wrapper';
import {
  MainHeader,
  MainHeaderInner,
  FormSearch,
  MainHeaderTitle,
  UserBlock
} from './styled';

import { ReactComponent as IconHome } from '../../assets/images/icons/icon-home.svg';
import { ReactComponent as IconUser } from '../../assets/images/icons/icon_user.svg';
import { ReactComponent as IconUsers } from '../../assets/images/icons/icon-users.svg';
import { ReactComponent as IconLogout } from '../../assets/images/icons/icon_logout.svg';
import { ReactComponent as IconSettings } from '../../assets/images/icons/icon-settings.svg';

const Header = ({ users, title }) => {
  const dispatch = useDispatch();
  const { login } = useSelector(getUserByIdStateSelector);
  const usersList = useSelector(getUsersStateSelector);

  const handleSearchUsersByLogin = userLogin => {
    const handler = setTimeout(() => {
      dispatch(getUsersByLoginThunk(userLogin))
    }, 500);

    return () => {
      clearTimeout(handler)
    };
  }

  return (
    <MainHeader>
      <Wrapper>
        <MainHeaderInner>
          {users &&
            <FormSearch onSubmit={e => e.preventDefault()}>
              <FormInput
                className="search"
                type="search"
                name="search"
                placeholder="Enter search login"
                onChange={e => handleSearchUsersByLogin(e.target.value)}
              />
            </FormSearch>
          }

          <MainHeaderTitle>
            {
              users && usersList.length ?
                `Finded ${usersList.length} ${usersList.length > 1 ? 'users' : 'user'}` :
                title || login
            }
          </MainHeaderTitle>

          <UserBlock>
            <li>
              <NavLink exact to='/' activeClassName="active">
                <IconHome className="icon" />
              </NavLink>
            </li>
            <li>
              <NavLink to='/users' activeClassName="active">
                <IconUsers className="icon" />
              </NavLink>
            </li>
            <li>
              <NavLink to='/settings' activeClassName="active">
                <IconSettings className="icon" />
              </NavLink>
            </li>
            <li>
              <NavLink to='/profile' activeClassName="active">
                <IconUser className="icon" />
              </NavLink>
            </li>
            <li>
              <button onClick={() => { dispatch(logoutThunk()) }}>
                <IconLogout className="icon" />
              </button>
            </li>
          </UserBlock>
        </MainHeaderInner>
      </Wrapper>
    </MainHeader>
  );
}


export default Header;