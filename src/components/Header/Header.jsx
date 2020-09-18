import React from 'react';

import { Wrapper } from '../Wrapper/Wrapper';
import FormInput from '../FormInput';

import { ReactComponent as IconUser } from '../../images/icon_user.svg';
import { ReactComponent as IconLogout } from '../../images/icon_logout.svg';
import './style.scss';

const Header = () => {
  console.log(window.location.pathname)
  return (
    <header className="main-header">
      <Wrapper>
        <div className="main-header__inner">
          {window.location.pathname === '/users' ?
            <form className='form-search' onSubmit={e => e.preventDefault()}>
              <FormInput
                className="field-wrap__input search-input"
                type="serch"
                name="serch"
                placeholder="Enter login"
              />
            </form>
            : null
          }
          
          <div className="main-header__title">
            Finded 3 users
          </div>
          <ul className="user-bl">
            <li><IconUser /></li>
            <li>
              <button
                className="bnt-logout"
                onClick={() => { console.log("Logout") }}
              >
                <IconLogout id="logout" />
              </button>
            </li>
          </ul>
        </div>
      </Wrapper>
    </header>
  );
}


export default Header;