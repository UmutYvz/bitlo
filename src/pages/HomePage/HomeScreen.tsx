import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import HomeView from './HomeView';
import { CoinStateType } from '../../redux/coins/reducer';
import { useSelector } from 'react-redux';
import { StateType } from '../../redux/appStore';

const HomeScreen = () => {
  const { coins } = useSelector((state: StateType) => state?.coins);

  return <HomeView coins={coins} />;
};

export default HomeScreen;

const styles = StyleSheet.create({});
