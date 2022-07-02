import { getCoins } from '../../../api';
import { COINS_FULLFILLED } from '../constants';

const coinsFullFilled = (payload: any) => ({
  type: COINS_FULLFILLED,
  payload
});

export const getCoinsAction = async (dispatch: any) => {
  console.log('asdfsasfd');
  const coins = await getCoins();
  await dispatch(coinsFullFilled(coins.data));
};
