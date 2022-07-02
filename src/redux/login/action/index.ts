import { login, register } from '../../../database/firebase';
import {
  LOGIN_SUCCESS,
  LOGOUT,
  SIGN_UP,
  SIGNUP_FAILED,
  LOGIN_FAILED
} from '../constants';
import LoadingView from '../../../components/Loading/LoadingView';
import { getCoins } from '../../../api';
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
