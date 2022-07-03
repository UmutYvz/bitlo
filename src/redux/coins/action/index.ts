import { fetchCoin, getCoins } from '../../../api';

import LoadingView from '../../../components/Loading/LoadingView';

import { calculateSums } from '../../../methods/calculateBidAskSums';

import { COINS_FULLFILLED, COIN_DETAIL_FULLFILLED } from '../constants';

const coinsFullFilled = (payload: any) => ({
  type: COINS_FULLFILLED,
  payload
});
const coinDetailFullFilled = (payload: any) => ({
  type: COIN_DETAIL_FULLFILLED,
  payload
});

export const getCoinsAction = async (dispatch: any) => {
  LoadingView.ref.show();
  const coins = await getCoins();
  await dispatch(coinsFullFilled(coins?.data));
  LoadingView.ref.close();
};

export const fetchCoinDetail = async (query: string, dispatch: any) => {
  LoadingView.ref.show();
  const coin = await fetchCoin(query);
  const totals = calculateSums(coin?.data);
  await dispatch(coinDetailFullFilled({ coin: coin?.data, totals }));
  LoadingView.ref.close();
};
