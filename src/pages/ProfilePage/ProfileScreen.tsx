import React, { FC } from 'react';

import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { useDispatch } from 'react-redux';

import { logoutAction } from '../../redux/auth/action';

import { AuthParams } from '../../navigator/NavigatorTypes';

import ProfileView from './ProfileView';

interface IProfileScreenProps {
  route: RouteProp<AuthParams, 'Profile'>;
}

const ProfileScreen: FC<IProfileScreenProps> = ({ route }) => {
  const navigation: StackNavigationProp<AuthParams> = useNavigation();
  const dispatch = useDispatch();
  const { items: menuItems } = route.params;

  const onPressMenu = async (toNavigate: any, params: any) => {
    if (toNavigate === 'Logout') {
      return await logoutAction(dispatch);
    }
    navigation.navigate(toNavigate, params);
  };

  return <ProfileView menuItems={menuItems} onPress={onPressMenu} />;
};

export default ProfileScreen;
