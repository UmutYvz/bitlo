import React, { FC, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';

import Navigator from '../../navigator/AppNavigator';

import { StateType } from '../../redux/appStore';
import { AuthStateType } from '../../redux/auth/reducer';

const Main: FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const state: AuthStateType = useSelector((state: StateType) => state?.auth);

  useEffect(() => {
    if (state.signUpSuccess || state.loginSuccess) {
      setIsLoggedIn(true);
    }
    if (state.logoutSuccess) {
      setIsLoggedIn(false);
    }
  }, [state]);

  return (
    <SafeAreaView style={styles.container}>
      <Navigator viewState={isLoggedIn ? 'auth' : 'app'} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' }
});

export default Main;
