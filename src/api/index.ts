import { create } from 'apisauce';
import integrationMaps from '../integrationMaps';
const {
  urls: { BASE_URL, ALL_COINS }
} = integrationMaps;

const api = create({
  baseURL: BASE_URL,
  timeout: 30 * 1000,
  headers: {}
});

export const getCoins = async (): Promise<any> => {
  console.log('2');
  return await api.get(`/${ALL_COINS}`);
};
