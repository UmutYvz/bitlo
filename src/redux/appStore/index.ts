import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware
} from 'redux';

import { createLogger } from 'redux-logger';

import { coinReducer } from '../coins/reducer';
import { authReducer } from '../auth/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  coins: coinReducer
});

export type StateType = ReturnType<typeof rootReducer>;

export type AppState = ReturnType<typeof rootReducer>;
export default function configureStore() {
  const middlewares = [createLogger({})];
  const middleWareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(rootReducer, middleWareEnhancer);
  return store;
}
