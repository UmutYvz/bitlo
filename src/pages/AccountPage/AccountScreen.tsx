import React, { FC, useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../../redux/appStore';
import { updateProfileAction } from '../../redux/auth/action';
import { AuthStateType } from '../../redux/auth/reducer';
import AccountView from './AccountView';

interface IAccountScreenProps {}

const AccountScreen: FC<IAccountScreenProps> = () => {
  const dispatch = useDispatch();
  const {
    profileUpdateFailed,
    user: { displayName, phoneNumber }
  }: AuthStateType = useSelector((state: StateType) => state?.auth);

  const splittedDisplayName = displayName.split(' ');

  const [error, setError] = useState<boolean>(profileUpdateFailed || false);

  const [form, setForm] = useState<ProfileFormType>({
    firstName: splittedDisplayName[0] || '',
    lastName: splittedDisplayName[1] || ''
  });

  const onChangeProfileInfo = useCallback(
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

  const validation = (form: ProfileFormType) => {
    const { firstName, lastName } = form;
    console.log(firstName, !!firstName.length, lastName, !!lastName.length);
    if (!firstName.length || !lastName.length) return false;
    return true;
  };

  const onPressUpdate = async () => {
    setError(false);
    const isValid = validation(form);
    if (isValid) {
      const res: any = await updateProfileAction(form, dispatch);
      console.log(res);
      if (res?.error) {
        setError(true);
      }
      return;
    }
    setError(true);
  };

  return (
    <AccountView
      error={error}
      form={form}
      onChangeProfileInfo={onChangeProfileInfo}
      onPressUpdate={onPressUpdate}
    />
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});

export type ProfileFormType = {
  firstName: string;
  lastName: string;
};
