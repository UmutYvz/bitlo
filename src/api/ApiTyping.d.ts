import { ApiResponse } from 'apisauce';
import { CoinType } from '../components/CoinCard';

interface CoinsResponseData {
  data: Array<CoinType>;
  message: string;
}

export interface CoinDetailResponseData {
  data: {
    sequanceId: number;
    asks: Array<string>;
    bids: Array<string>;
  };
  message: string;
}
export type BaseResponse = ApiResponse<CoinsResponseData>;

export type CoinResponse = ApiResponse<CoinDetailResponseData>;
