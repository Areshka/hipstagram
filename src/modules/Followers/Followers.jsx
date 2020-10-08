import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header';
import { WrapperContent } from '../../components/Wrapper/Wrapper';

import { getUserByIdThunk } from '../../store/users/thunks';
import { getUserByIdStateSelector } from '../../store/users/selectors';
import { getFollowersFollowingsUserByIdFetch } from '../../api/users.service';

import IconDefaultAvatar from '../../assets/images/icons/icon-default-avatar.svg';
import { StyledFollowersList } from './styled';

// custom useFollowers hook
const useFollowers = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [followers, setFollowers] = useState([]);
  const { login } = useSelector(getUserByIdStateSelector);

  useEffect(() => {
    async function fetchData() {
      let { followers } = await getFollowersFollowingsUserByIdFetch(id)
      setFollowers(followers)
    }

    fetchData();

    dispatch(getUserByIdThunk(id));
  }, [id, dispatch]);

  return { login, followers }
}

// function component Followers
const Followers = () => {
  const { login, followers } = useFollowers()

  return (
    <>
      <Header title={`Followers ${login}`} />
      <WrapperContent>
        <StyledFollowersList>
          {followers.map(follower =>
            <li key={follower.id}>
              <Link to={'/profile/' + follower.id}>
                {<img src={follower.avatar || IconDefaultAvatar} alt={follower.login} />}
                <p>{`${follower.login} - `}
                  <span className="full-name">{`${follower.firstName} ${follower.lastName}`}</span>
                </p>
              </Link>
            </li>)}
        </StyledFollowersList>
      </WrapperContent>
    </>
  );
}

export default Followers;