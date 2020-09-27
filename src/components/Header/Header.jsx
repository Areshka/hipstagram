import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutThunk } from '../../store/auth/thunks';

import FormInput from '../FormInput';
import { Wrapper } from '../Wrapper/Wrapper';
import {
  MainHeader,
  MainHeaderInner,
  FormSearch,
  MainHeaderTitle,
  UserBlock
} from './styled';

import { ReactComponent as IconUser } from '../../assets/images/icons/icon_user.svg';
import { ReactComponent as IconLogout } from '../../assets/images/icons/icon_logout.svg';
import { ReactComponent as IconSettings } from '../../assets/images/icons/icon-settings.svg';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <MainHeader>
      <Wrapper>
        <MainHeaderInner>
          {window.location.pathname === '/users' ?
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
            <li><Link to='/settings'><IconSettings /></Link></li>
            <li><Link to='/profile'><IconUser /></Link></li>
            <li>
              <button onClick={() => { dispatch(logoutThunk()) }}>
                <IconLogout id="logout" />
              </button>
            </li>
          </UserBlock>
        </MainHeaderInner>
      </Wrapper>
    </MainHeader>
  );
}


export default Header;