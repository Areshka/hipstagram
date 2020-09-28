export const authStateSelector = state => state.authentication;
export const getAuthSelector = state => authStateSelector(state).auth;
export const getAuthStatusSelector = state => getAuthSelector(state).authStatus;