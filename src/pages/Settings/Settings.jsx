import React from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';

import EditProfile from '../../modules/EditProfile';
import ChangePassword from '../../modules/ChangePasswod';
import { WrapperContent } from '../../components/Wrapper/Wrapper';
import { StyledSettings, StyledList, StyledSettingsContent } from './styled';

const Settings = () => {
  return (
    <WrapperContent>
      <StyledSettings>
        <StyledList>
          <li><NavLink to='/settings/edit_profile' activeClassName="active">Edit profile</NavLink></li>
          <li><NavLink to='/settings/change_password' activeClassName="active">Change password</NavLink></li>
        </StyledList>
        <StyledSettingsContent>
          <Switch>
            <Route path='/settings/edit_profile' component={EditProfile} />
            <Route path='/settings/change_password' component={ChangePassword} />
            <Redirect to='/settings/edit_profile' />
          </Switch>
        </StyledSettingsContent>
      </StyledSettings>

    </WrapperContent>
  );
}

export default Settings;