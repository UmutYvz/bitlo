import * as $ from '../constants';

const initialState: AuthStateType = {
  pending: false,
  loginSuccess: false,
  loginFailed: false,
  logoutSuccess: false,
  signUpSuccess: false,
  signUpFailed: false,
  user: false
};

export const authReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case $.SIGNUP_FAILED:
      return { ...state, error: true };
    case $.PENDING_TRUE:
      return { ...state, pending: true };
    case $.PENDING_FALSE:
      return { ...state, pending: false };
    case $.LOGIN_SUCCESS:
      return { ...state, user: action.payload, loginSuccess: true };
    case $.LOGIN_FAILED:
      return { ...state, loginSuccess: false };
    case $.LOGOUT_SUCCESS:
      return { ...state, logoutSuccess: true };
    case $.SIGN_UP:
      return { ...state, signUpSuccess: true };
    case $.CLEAR_AUTH:
      return { ...initialState };
    default:
      return state;
  }
};

export type AuthStateType = {
  pending: boolean;
  loginSuccess: boolean;
  loginFailed: boolean;
  logoutSuccess: boolean;
  signUpSuccess: boolean;
  signUpFailed: boolean;
  user: any;
};
