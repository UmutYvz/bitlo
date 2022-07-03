import React, { FC } from 'react';

import {
  CardStyleInterpolators,
  createStackNavigator,
  StackHeaderProps
} from '@react-navigation/stack';

import Header from '../components/Header';

import LoginScreen from '../pages/LoginPage/LoginScreen';
import SignUpScreen from '../pages/SignUpPage/SignUpScreen';
import HomeScreen from '../pages/HomePage/HomeScreen';
import CoinDetailScreen from '../pages/CoinDetailPage/CoinDetailScreen';
import ProfileScreen from '../pages/ProfilePage/ProfileScreen';
import AccountScreen from '../pages/AccountPage/AccountScreen';

const RootStack = createStackNavigator();
const Stack = createStackNavigator();

const AppStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: '#fff' },
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        headerShown: false,
        header: (props: StackHeaderProps) => <Header navProps={props} />
      }}
    >
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{ headerShown: true }}
        initialParams={{ title: 'Bitlo' }}
      />
      <Stack.Screen
        name='SignUp'
        component={SignUpScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

const AuthStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: '#fff' },
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        header: (props: StackHeaderProps) => <Header navProps={props} />
      }}
    >
      <Stack.Screen
        name='HomePage'
        component={HomeScreen}
        initialParams={{ title: 'Bütün Coinler', isLoggedIn: true }}
      />
      <Stack.Screen
        name='CoinDetail'
        component={CoinDetailScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter
        }}
      />
      <Stack.Screen
        name='ProfileStack'
        component={ProfileStack}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
        }}
      />
    </Stack.Navigator>
  );
};

const ProfileStack: FC<any> = (props: StackHeaderProps) => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: '#fff' },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        header: (props: StackHeaderProps) => <Header navProps={props} />
      }}
    >
      <Stack.Screen
        name='Profile'
        component={ProfileScreen}
        options={{ headerShown: true }}
        initialParams={props.route.params}
      />
      <Stack.Screen name='Account' component={AccountScreen} />
    </Stack.Navigator>
  );
};

interface INavigatorPropTypes {
  viewState: string;
}

const Navigator: FC<INavigatorPropTypes> = (props: INavigatorPropTypes) => {
  return (
    <RootStack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: '#fff' },
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
      }}
    >
      {props.viewState === 'app' ? (
        <RootStack.Screen
          name='AppStack'
          component={AppStack}
          initialParams={props}
        />
      ) : (
        <RootStack.Screen
          name='AuthStack'
          component={AuthStack}
          initialParams={props}
        />
      )}
    </RootStack.Navigator>
  );
};

export default Navigator;
