import { MenuItemType } from '../utils/menuConstants';

export type AppParams = {
  Login: undefined;
  SignUp: {
    goBack?: boolean;
    title?: string;
  };
};

export type AuthParams = {
  HomePage: undefined;
  CoinDetail: {
    title?: string;
    goBack?: boolean;
    query: string;
  };
  Profile: {
    title?: string;
    goBack?: boolean;
    items: MenuItemType;
  };
  Account: undefined;
  Logout: undefined;
};
