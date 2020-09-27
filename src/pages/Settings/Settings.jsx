import React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';

import ChangePassword from '../../components/ChangePasswod';
import { WrapperContent } from '../../components/Wrapper/Wrapper';

const Settings = () => {
  return (
    <WrapperContent>
      <div>
        <ul>
          <li><Link to='/settings/edit_profile'>Edit profile</Link></li>
          <li><Link to='/settings/change_password'>Change password</Link></li>
        </ul>
        <div>
          <Switch>
            <Route path='/settings/edit_profile' render={() => <h1>Edit Profile</h1>} />
            <Route path='/settings/change_password' component={ChangePassword} />
            <Redirect to='/settings/edit_profile' />
          </Switch>
        </div>
      </div>

    </WrapperContent>
  );
}

export default Settings;