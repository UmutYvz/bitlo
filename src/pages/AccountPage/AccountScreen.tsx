import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import AccountView from './AccountView';

interface IAccountScreenProps {}

const AccountScreen: FC<IAccountScreenProps> = () => {
  return <AccountView />;
};

export default AccountScreen;

const styles = StyleSheet.create({});
