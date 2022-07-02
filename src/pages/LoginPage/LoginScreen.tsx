import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC, useCallback, useState } from 'react';
import { AppParams } from '../../navigator/NavigatorTypes';
import LoginView from './LoginView';

import { useDispatch } from 'react-redux';
import staticTexts from '../../staticTexts';
import { loginAction } from '../../redux/login/action';
import { AuthStateType } from '../../redux/login/reducer';
import { useSelector } from 'react-redux';
import { StateType } from '../../redux/appStore';

const { login: $L } = staticTexts;
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
