import React, { FC, useRef } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import Main from './pages/Main';
import { Provider } from 'react-redux';
import configureStore from './redux/appStore';
import LoadingView from './components/Loading/LoadingView';

const store = configureStore();
const App: FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Main />
        <LoadingView ref={(ref: LoadingView) => (LoadingView.ref = ref)} />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
