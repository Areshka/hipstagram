import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header';
import { WrapperContent } from '../../components/Wrapper/Wrapper';

import { getUserByIdThunk } from '../../store/users/thunks';
import { getUserByIdStateSelector } from '../../store/users/selectors';
import { getFollowersFollowingsUserByIdFetch } from '../../api/users.service';

import IconDefaultAvatar from '../../assets/images/icons/icon-default-avatar.svg';
import { StyledFollowingsList } from './styled';

// custom useFollowings hook
const useFollowings = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [followings, setFollowings] = useState([]);
  const { login } = useSelector(getUserByIdStateSelector);

  useEffect(() => {
    async function fetchData() {
      let { following } = await getFollowersFollowingsUserByIdFetch(id)
      setFollowings(following)
    }

    fetchData();

    dispatch(getUserByIdThunk(id));
  }, [id, dispatch]);

  return { login, followings }
}

// function component Followings
const Followings = () => {
  const { login, followings } = useFollowings();

  return (
    <>
      <Header title={`Followings ${login}`} />
      <WrapperContent>
        <StyledFollowingsList>
          {followings.map(following =>
            <li key={following.id}>
              <Link to={'/profile/' + following.id}>
                {<img src={following.avatar || IconDefaultAvatar} alt={following.login} />}
                <p>{`${following.login} - `}
                  <span className="full-name">{`${following.firstName} ${following.lastName}`}</span>
                </p>
              </Link>
            </li>)}
        </StyledFollowingsList>
      </WrapperContent>
    </>
  );
}

export default Followings;