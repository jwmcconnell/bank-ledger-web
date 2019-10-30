export const getAuthState = state => state.auth;
export const getUsername = state => getAuthState(state).username;
export const getAccountBalance = state => getAuthState(state).balance;
export const getAuthError = state => getAuthState(state).error;
export const getTransactions = state => getAuthState(state).transactions;
export const getLoggedOut = state => getAuthState(state).loggedOut;
