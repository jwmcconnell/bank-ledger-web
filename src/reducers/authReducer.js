import {
  LOGIN,
  LOGIN_LOADING,
  LOGIN_ERROR,
  SIGN_UP_LOADING,
  SIGN_UP,
  SIGN_UP_ERROR,
  VERIFY,
  VERIFY_ERROR,
  VERIFY_LOADING,
  LOG_OUT,
  LOG_OUT_LOADING,
  LOG_OUT_ERROR
} from '../actions/authActions';
import { 
  DEPOSIT, 
  DEPOSIT_LOADING, 
  DEPOSIT_ERROR, 
  WITHDRAWAL_LOADING,
  WITHDRAWAL_ERROR,
  WITHDRAWAL,
  TRANSACTIONS_LOADING,
  TRANSACTIONS,
  TRANSACTIONS_ERROR
} from '../actions/ledgerActions';

const initialState = {
  username: null,
  balance: 0,
  loading: false,
  error: null,
  transactions: [],
  loggedOut: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case LOGIN_LOADING:
      return { ...state, loading: true };
    case SIGN_UP_LOADING:
      return { ...state, loading: true };
    case VERIFY_LOADING:
      return { ...state, loading: true };
    case DEPOSIT_LOADING:
      return { ...state, loading: true };
    case WITHDRAWAL_LOADING:
      return { ...state, loading: true };
    case TRANSACTIONS_LOADING:
      return { ...state, loading: true };
    case LOG_OUT_LOADING:
      return { ...state, loading: true };
    case LOGIN:
      return { 
        ...state, 
        loading: false, 
        username: action.payload.username,
        balance: action.payload.balance,
        transactions: [],
        error: null,
        loggedOut: false
      };
    case SIGN_UP:
      return { 
        ...state, 
        loading: false, 
        username: action.payload.username,
        balance: action.payload.balance,
        transactions: [],
        error: null,
        loggedOut: false
      };
    case VERIFY:
      return {
        ...state,
        loading: false,
        username: action.payload.username,
        balance: action.payload.balance,
        error: null
      };
    case DEPOSIT:
      return {
        ...state,
        loading: false,
        balance: action.payload.balance
      };
    case WITHDRAWAL:
      return {
        ...state,
        loading: false,
        balance: action.payload.balance
      };
    case TRANSACTIONS:
      return {
        ...state,
        loading: false,
        transactions: action.payload
      };
    case LOG_OUT:
      return {
        ...state,
        loading: false,
        username: null,
        loggedOut: true,
        transactions: [],
      };
    case LOGIN_ERROR:
      return { ...state, loading: false, error: action.payload };
    case SIGN_UP_ERROR:
      return { ...state, loading: false, error: action.payload };
    case VERIFY_ERROR:
      return { ...state, loading: false, error: action.payload };
    case DEPOSIT_ERROR:
      return { ...state, loading: false, error: action.payload };
    case WITHDRAWAL_ERROR:
      return { ...state, loading: false, error: action.payload };
    case TRANSACTIONS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case LOG_OUT_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
