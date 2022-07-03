import { create } from 'apisauce';

import integrationMaps from '../integrationMaps';

import { BaseResponse, CoinResponse } from './ApiTyping';

const {
  urls: { BASE_URL, ALL_COINS, COIN, DEPTH }
} = integrationMaps;

const api = create({
  baseURL: BASE_URL,
  timeout: 30 * 1000,
  headers: {}
});

export const getCoins = async (): Promise<BaseResponse> => {
  return await api.get(`${ALL_COINS}`);
};

export const fetchCoin = async (query: string): Promise<CoinResponse> => {
  return await api.get(`${COIN}${query}${DEPTH}`);
};
