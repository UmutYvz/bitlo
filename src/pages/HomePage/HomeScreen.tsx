import React, { FC } from 'react';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import HomeView from './HomeView';

import { StateType } from '../../redux/appStore';

import { AuthParams } from '../../navigator/NavigatorTypes';

interface IHomeScreenProps {}

const HomeScreen: FC<IHomeScreenProps> = () => {
  const navigation: StackNavigationProp<AuthParams> = useNavigation();
  const { coins } = useSelector((state: StateType) => state?.coins);

  const onPressCoinDetail = (query: string) =>
    navigation.navigate('CoinDetail', {
      goBack: true,
      title: query,
      query
    });

  return <HomeView coins={coins} onPressCoinDetail={onPressCoinDetail} />;
};

export default HomeScreen;
