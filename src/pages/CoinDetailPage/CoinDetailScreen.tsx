import { RouteProp } from '@react-navigation/native';
import React, { FC, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { StateType } from '../../redux/appStore';
import { fetchCoinDetail } from '../../redux/coins/action';
import { CoinStateType } from '../../redux/coins/reducer';

import { AuthParams } from '../../navigator/NavigatorTypes';

import CoinDetailView from './CoinDetailView';

interface ICoinDetailScreen {
  route: RouteProp<AuthParams, 'CoinDetail'>;
}
const CoinDetailScreen: FC<ICoinDetailScreen> = ({ route }) => {
  const dispatch = useDispatch();
  const state: CoinStateType = useSelector((state: StateType) => state?.coins);

  const { activeCoinDetail } = state;
  const { query } = route?.params;

  const fetchCoin = async () => await fetchCoinDetail(query, dispatch);

  useEffect(() => {
    fetchCoin();
  }, []);

  return activeCoinDetail ? (
    <CoinDetailView coinName={query} orders={activeCoinDetail} />
  ) : (
    <></>
  );
};

export default CoinDetailScreen;
