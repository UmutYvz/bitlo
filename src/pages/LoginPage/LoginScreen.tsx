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

const LoginScreen: FC<ILoginScreenProps> = () => {
  const dispatch = useDispatch();
  const state: AuthStateType = useSelector((state: StateType) => state?.auth);

  const navigation: StackNavigationProp<AppParams> = useNavigation();

  const [form, setForm] = useState<LoginFormType>({
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
  const validation = (form: LoginFormType) => {
    const { email, password } = form;
    if (!email.length || !password.length) return false;
    return true;
  };

  const onPressLogin = async () => {
    setError(false);
    const isValid = validation(form);
    if (isValid) {
      const res: any = await loginAction(
        { email: form.email, password: form.password },
        dispatch
      );
      if (res?.error) {
        setError(true);
      }
      return;
    }
    setError(true);
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

export type LoginFormType = {
  email: string;
  password: string;
};
