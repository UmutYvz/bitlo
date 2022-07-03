import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { StateType } from '../../redux/appStore';
import { signUpAction } from '../../redux/auth/action';
import { AuthStateType } from '../../redux/auth/reducer';

import { FormType } from '../LoginPage/LoginScreen';

import SignUpView from './SignUpView';

const SignUpScreen = () => {
  const dispatch = useDispatch();
  const state: AuthStateType = useSelector((state: StateType) => state?.auth);

  const [form, setForm] = useState<FormType>({
    email: '',
    password: '',
    name: '',
    phone: '',
    returnSecureToken: true
  });

  const [error, setError] = useState<boolean>(state.signUpFailed);

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

  const onPressSignUp = async () => {
    const res = await signUpAction(
      { email: form.email, password: form.password },
      dispatch
    );
    if (res?.error) {
      setError(true);
      return;
    }
  };
  return (
    <SignUpView
      onPressSignUp={onPressSignUp}
      onChangeLoginInfo={onChangeLoginInfo}
      form={form}
      error={error}
    />
  );
};

export default SignUpScreen;
