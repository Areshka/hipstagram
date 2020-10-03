import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutThunk } from '../../store/users/thunks';

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

const Header = ({ users }) => {
  const dispatch = useDispatch();

  return (
    <MainHeader>
      <Wrapper>
        <MainHeaderInner>
          {users ?
            <FormSearch onSubmit={e => e.preventDefault()}>
              <FormInput
                primary
                className="search"
                type="search"
                name="search"
                placeholder="Enter search login"
              />
            </FormSearch>
            : null
          }

          <MainHeaderTitle>
            Finded 3 users
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