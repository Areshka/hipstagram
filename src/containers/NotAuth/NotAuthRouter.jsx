import React, { Suspense } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

import Preloader from '../../components/Preloader/Preloader';
import { routes } from '../../constants/routes';
const Feed = React.lazy(() => import('../../pages/Feed'));
const Users = React.lazy(() => import('../../pages/Users'));
const Followers = React.lazy(() => import('../../modules/Followers'));
const Followings = React.lazy(() => import('../../modules/Followings'));

const NotAuthRouter = () => {
  return (
    <Switch>
      <Route exact path={routes.feed.path} >
        <Suspense fallback={<Preloader />}>
          {<Feed />}
        </Suspense>
      </Route>
      <Route path={routes.users.path}>
        <Suspense fallback={<Preloader />}>
          <Users />
        </Suspense>
      </Route>
      <Route path={routes.profile.path + "/:id"} component={routes.profile.component} />
      <Route path={routes.profile.path} component={routes.profile.component} />
      <Route path={routes.settings.path} component={routes.settings.component} />
      <Route path={routes.newPost.path} component={routes.newPost.component} />
      <Route path={routes.followers.path} >
        <Suspense fallback={<Preloader />}>
          <Followers />
        </Suspense>
      </Route>
      <Route path={routes.followings.path} >
        <Suspense fallback={<Preloader />}>
          <Followings />
        </Suspense>
      </Route>
      <Redirect to={routes.feed.path} />
    </Switch>
  );
}

export default NotAuthRouter;