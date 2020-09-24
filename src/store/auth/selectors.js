export const authStateSelector = state => state.auth;
export const getCurrentUserSelector = state => authStateSelector(state).currentUser;
export const getAuthStatusSelector = state => getCurrentUserSelector(state).auth;