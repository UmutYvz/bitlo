import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { StateType } from '../../redux/appStore';
import { signUpAction } from '../../redux/auth/action';
import { AuthStateType } from '../../redux/auth/reducer';

import SignUpView from './SignUpView';

const SignUpScreen = () => {
  const dispatch = useDispatch();
  const state: AuthStateType = useSelector((state: StateType) => state?.auth);

  const [form, setForm] = useState<SignUpFormType>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
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

  const validation = (form: SignUpFormType) => {
    setError(false);
    const { firstName, lastName, password, email } = form;
    if (
      !firstName.length ||
      !lastName.length ||
      !password.length ||
      !email.length
    )
      return false;
    return true;
  };

  const onPressSignUp = async () => {
    const isValid = validation(form);
    if (isValid) {
      const res = await signUpAction(form, dispatch);
      if (res?.error) {
        setError(true);
      }
      return;
    }
    setError(true);
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

export type SignUpFormType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  returnSecureToken?: boolean;
};
