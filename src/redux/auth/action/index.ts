import { login, logout, register } from '../../../database/firebase';

import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  SIGN_UP,
  SIGNUP_FAILED,
  CLEAR_AUTH
} from '../constants';

import LoadingView from '../../../components/Loading/LoadingView';

import { getCoinsAction } from '../../coins/action';

const loginSuccess = (payload: any) => ({
  type: LOGIN_SUCCESS,
  payload
});
const loginFailed = () => ({
  type: LOGIN_FAILED
});

const signUpSuccess = () => ({
  type: SIGN_UP
});
const signUpFailed = () => ({
  type: SIGNUP_FAILED
});

const logoutFailed = () => ({
  type: LOGOUT_FAILED
});

const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
});

const clearAuth = () => ({
  type: CLEAR_AUTH
});

console.log('LOGOUT_SUCCESS', LOGOUT_SUCCESS);
export const signUpAction = async (
  form: { email: string; password: string },
  dispatch: any
) => {
  LoadingView.ref.show();
  const res: any = await register(form);
  if (!!res?.code) {
    await dispatch(signUpFailed());
    LoadingView.ref.close();
    return { error: true };
  }
  await dispatch(signUpSuccess());
  LoadingView.ref.close();
  return res;
};

export const loginAction = async (
  form: { email: string; password: string },
  dispatch: any
) => {
  LoadingView.ref.show();
  const res: any = await login(form);
  if (!!res?.code) {
    await dispatch(loginFailed());
    LoadingView.ref.close();
    return { error: true };
  }
  await getCoinsAction(dispatch);
  await dispatch(loginSuccess(res));
  LoadingView.ref.close();
};

export const logoutAction = async (dispatch: any) => {
  LoadingView.ref.show();
  const res: any = await logout();
  if (!res) {
    await dispatch(logoutFailed());
    LoadingView.ref.close();
    return { error: true };
  }
  await dispatch(logoutSuccess());
  await dispatch(clearAuth());
  LoadingView.ref.close();
};
