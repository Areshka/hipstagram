import React from 'react';

import { Wrapper } from '../Wrapper/Wrapper';
import FormInput from '../FormInput';
import {
  MainHeader,
  MainHeaderInner,
  FormSearch,
  MainHeaderTitle,
  UserBlock
} from './styled';

import { ReactComponent as IconUser } from '../../images/icon_user.svg';
import { ReactComponent as IconLogout } from '../../images/icon_logout.svg';

const Header = () => {
  console.log(window.location.pathname)
  return (
    <MainHeader>
      <Wrapper>
        <MainHeaderInner>
          {window.location.pathname === '/users' ?
            <FormSearch onSubmit={e => e.preventDefault()}>
              <FormInput
                search
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
            <li><IconUser /></li>
            <li>
              <button
                className="bnt-logout"
                onClick={() => { console.log("Logout") }}
              >
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