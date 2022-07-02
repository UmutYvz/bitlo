import * as $ from '../constants';
const initialState: CoinStateType = {
  coins: false
};

export const coinReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case $.COINS_FULLFILLED:
      return { ...state, coins: action.payload };
    default:
      return state;
  }
};

export type CoinStateType = {
  coins: any;
};
