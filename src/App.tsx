import React, { FC } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import configureStore from './redux/appStore';

import LoadingView from './components/Loading';

import Main from './pages/Main';

const store = configureStore();
const App: FC = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Main />
      <LoadingView ref={(ref: LoadingView) => (LoadingView.ref = ref)} />
    </NavigationContainer>
  </Provider>
);

export default App;
