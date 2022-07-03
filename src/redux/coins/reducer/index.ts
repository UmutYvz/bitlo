import * as $ from '../constants';

import { CoinType } from '../../../components/CoinCard';

const initialState: CoinStateType = {
  coins: false,
  activeCoinDetail: false
};

export const coinReducer = (
  state = initialState,
  action: {
    type: string;
    payload: any;
  }
) => {
  switch (action.type) {
    case $.COINS_FULLFILLED:
      return { ...state, coins: action.payload };
    case $.COIN_DETAIL_FULLFILLED:
      console.log(action);
      console.log(action);
      console.log(action);
      return {
        ...state,
        activeCoinDetail: {
          asks: action.payload.coin.asks,
          bids: action.payload.coin.bids,
          totals: action.payload.totals
        }
      };
    default:
      return state;
  }
};

export type CoinStateType = {
  coins: boolean | Array<CoinType>;
  activeCoinDetail: boolean | Array<CoinDetailType>;
};

export type CoinDetailType = {
  asks: Array<OrderType>;
  bids: Array<OrderType>;
  totals: {
    totalAsk: string;
    totalBid: string;
  };
};

export type OrderType = {
  0: string;
  1: string;
  2?: string;
};
