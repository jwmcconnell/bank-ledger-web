export const getAuthState = state => state.auth;
export const getUsername = state => getAuthState(state).username;
export const getAuthError = state => getAuthState(state).error;
