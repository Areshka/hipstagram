export const usersStateSelector = state => state.users;
export const getAuthSelector = state => usersStateSelector(state).auth;
export const getAuthStatusSelector = state => getAuthSelector(state).authStatus;