import {
  LOGIN,
  LOGIN_LOADING,
  LOGIN_ERROR,
  SIGN_UP_LOADING,
  SIGN_UP,
  SIGN_UP_ERROR,
} from '../actions/authActions';

const initialState = {
  username: null,
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case LOGIN_LOADING:
      return { ...state, loading: true };
    case SIGN_UP_LOADING:
      return { ...state, loading: true };
    case LOGIN:
      return { 
        ...state, 
        loading: false, 
        username: action.payload.username,
        error: null 
      };
    case SIGN_UP:
      return { 
        ...state, 
        loading: false, 
        username: action.payload.username,
        error: null 
      };
    case LOGIN_ERROR:
      return { ...state, loading: false, error: action.payload };
    case SIGN_UP_ERROR:
      return { ...state, loading :false, error: action.payload };
    default:
      return state;
  }
}
