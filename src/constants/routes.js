import Feed from '../pages/Feed';
import Login from '../modules/Login';
import Registration from '../modules/Registration';
import Users from '../pages/Users';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';
import NewPost from '../modules/NewPost';
import Followers from '../modules/Followers';
import Followings from '../modules/Followings';

export const routes = {
  login: {
    path: '/login',
    component: Login
  },
  registration: {
    path: '/registation',
    component: Registration
  },
  feed: {
    path: '/',
    exact: true,
    component: Feed
  },
  users: {
    path: '/users',
    component: Users
  },
  profile: {
    path: '/profile',
    component: Profile
  },
  settings: {
    path: '/settings',
    component: Settings
  },
  newPost: {
    path: '/new_post',
    component: NewPost
  },
  followers: {
    path: '/followers/:id',
    component: Followers
  },
  followings: {
    path: '/followings/:id',
    component: Followings
  },
}