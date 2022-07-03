import {
  login,
  logout,
  register,
  updateUserProfile
} from '../../../database/firebase';

import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  SIGN_UP,
  SIGNUP_FAILED,
  CLEAR_AUTH,
  PROFILE_CREATE_FAILED,
  UPDATE_PROFILE_FAILED,
  PROFILE_CREATE_SUCCESS,
  UPDATE_PROFILE_SUCCESS
} from '../constants';

import LoadingView from '../../../components/Loading';

import { clearCoinState, getCoinsAction } from '../../coins/action';
import { ProfileFormType } from '../../../pages/AccountPage/AccountScreen';
import { SignUpFormType } from '../../../pages/SignUpPage/SignUpScreen';
import { Action, Dispatch } from 'redux';

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

const updateProfileSuccess = () => ({
  type: UPDATE_PROFILE_SUCCESS
});

const updateProfileFailed = () => ({
  type: UPDATE_PROFILE_FAILED
});

const createProfileFailWhileSigning = () => ({
  type: PROFILE_CREATE_FAILED
});

const profileCreateSuccess = () => ({
  type: PROFILE_CREATE_SUCCESS
});

const clearAuth = () => ({
  type: CLEAR_AUTH
});

export const signUpAction = async (
  form: SignUpFormType,
  dispatch: Dispatch<Action>
) => {
  LoadingView.ref.show();
  const { email, password, firstName, lastName } = form;
  const displayName = `${firstName} ${lastName}`;

  const res: any = await register({ email, password });
  if (!!res?.code) {
    dispatch(signUpFailed());
    LoadingView.ref.close();
    return { error: true };
  }

  const profileCreated = updateUserProfile({ displayName });

  if (!profileCreated) {
    dispatch(createProfileFailWhileSigning());
    LoadingView.ref.close();
    return { error: true };
  }
  dispatch(profileCreateSuccess());
  getCoinsAction(dispatch);
  dispatch(signUpSuccess());
  dispatch(loginSuccess(res));

  LoadingView.ref.close();
  return res;
};

export const loginAction = async (
  form: { email: string; password: string },
  dispatch: Dispatch<Action>
) => {
  LoadingView.ref.show();
  const res: any = await login(form);
  if (!!res?.code) {
    dispatch(loginFailed());
    LoadingView.ref.close();
    return { error: true };
  }
  await getCoinsAction(dispatch);
  dispatch(loginSuccess(res));
  LoadingView.ref.close();
};

export const logoutAction = async (dispatch: Dispatch<Action>) => {
  LoadingView.ref.show();
  const res: any = await logout();
  if (!res) {
    dispatch(logoutFailed());
    LoadingView.ref.close();
    return { error: true };
  }
  dispatch(logoutSuccess());
  dispatch(clearAuth());
  dispatch(clearCoinState());
  LoadingView.ref.close();
};

export const updateProfileAction = async (
  form: ProfileFormType,
  dispatch: Dispatch<Action>
) => {
  LoadingView.ref.show();
  const { firstName, lastName } = form;
  const displayName = `${firstName} ${lastName}`;

  const profileCreated = await updateUserProfile({ displayName });

  if (!profileCreated) {
    dispatch(updateProfileFailed());
    LoadingView.ref.close();
    return { error: true };
  }
  dispatch(updateProfileSuccess());
  LoadingView.ref.close();
};
