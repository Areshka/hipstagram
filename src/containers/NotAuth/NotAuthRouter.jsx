import React, { Suspense } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

import Profile from '../../pages/Profile';
import NewPost from '../../modules/NewPost';
import Settings from '../../pages/Settings';
import Preloader from '../../components/Preloader/Preloader';
const Feed = React.lazy(() => import('../../pages/Feed'));
const Users = React.lazy(() => import('../../pages/Users'));

const NotAuthRouter = () => {
  return (
    <Switch>
      <Route exact path='/' >
        <Suspense fallback={<Preloader />}>
          <Feed />
        </Suspense>
      </Route>
      <Route path='/users'>
        <Suspense fallback={<Preloader />}>
          <Users />
        </Suspense>
      </Route>
      <Route path="/profile/:id">
        <Profile />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/settings" component={Settings} />
      <Route path='/new_post' component={NewPost} />
      <Redirect to='/' />
    </Switch>
  );
}

export default NotAuthRouter;