import React, { FC, useCallback, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';

import { loginAction } from '../../redux/auth/action';
import { AuthStateType } from '../../redux/auth/reducer';
import { StateType } from '../../redux/appStore';

import staticTexts, { StaticTextType } from '../../staticTexts';

import { AppParams } from '../../navigator/NavigatorTypes';

import LoginView from './LoginView';

const { login: $L }: StaticTextType = staticTexts;
interface ILoginScreenProps {}

export type FormType = {
  name?: string;
  phone?: string;
  email: string;
  password: string;
  returnSecureToken?: boolean;
};
const LoginScreen: FC<ILoginScreenProps> = () => {
  const dispatch = useDispatch();
  const state: AuthStateType = useSelector((state: StateType) => state?.auth);

  const navigation: StackNavigationProp<AppParams> = useNavigation();

  const [form, setForm] = useState<FormType>({
    email: '',
    password: ''
  });
  const [error, setError] = useState<boolean>(state.loginFailed);

  const onChangeLoginInfo = useCallback(
    (type: string, value: string) => {
      let newForm = { ...form };
      newForm = {
        ...newForm,
        [type]: value
      };
      setForm(newForm);
    },
    [form, setForm]
  );

  const onPressLogin = async () => {
    const res: any = await loginAction(
      { email: form.email, password: form.password },
      dispatch
    );
    if (res?.error) {
      setError(true);
      return;
    }
  };

  const onPressSignUp = () => {
    navigation.navigate('SignUp', { goBack: true, title: $L.SIGN_UP });
  };

  return (
    <LoginView
      form={form}
      onChangeLoginInfo={onChangeLoginInfo}
      onPressSignUp={onPressSignUp}
      onPressLogin={onPressLogin}
      error={error}
    />
  );
};

export default LoginScreen;
