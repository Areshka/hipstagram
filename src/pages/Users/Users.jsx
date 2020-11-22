import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import User from "./User";
import Header from "../../components/Header";
import { WrapperContent } from "../../components/Wrapper/Wrapper";
import { ReactComponent as UsersNotFoundImg } from "../../assets/images/icons/icon_not_user.svg";

import { getUsersThunk } from "../../store/users/thunks";
import {
  getCurrentUserSelector,
  getLoading,
  getUsersStateSelector,
} from "../../store/users/selectors";

import { NoUsersBlock } from "./styled";
import actionTypes from "../../store/users/actionTypes";
import Preloader from "../../components/Preloader/Preloader";
import { showLoaderAction } from "../../store/users/actions";

// custom useUsers Hook
const useUsers = () => {
  const users = useSelector(getUsersStateSelector);
  const { id: currentId } = useSelector(getCurrentUserSelector);
  const loading = useSelector(getLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersThunk());
    if (users.length === 0) dispatch(showLoaderAction());
  }, []);

  const userList = users
    .filter((user) => user._id !== currentId)
    .map((user) => <User key={user._id} user={user} />);

  return { users, userList, loading };
};

// function component Users
const Users = () => {
  const { users, userList, loading } = useUsers();

  return (
    <>
      <Header users />
      <WrapperContent>
        {/* {loading && <Preloader />} */}
        {loading ? (
          <Preloader />
        ) : users.length ? (
          <div className="users">{userList}</div>
        ) : (
          <NoUsersBlock>
            <UsersNotFoundImg />
            <p>Users not found</p>
          </NoUsersBlock>
        )}
      </WrapperContent>
    </>
  );
};

export default Users;
