import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignInScreen} from '../screens/SignInScreen';
import {SignUpScreen} from '../screens/SignUpScreen';
import {useAuth} from '../hooks';
import {BottomTabs} from './BottomTabs';

export type RootStackParamList = {
  BottomTabs: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  const {isAuthenticated} = useAuth();

  return (
    <NavigationContainer
      onReady={() => RNBootSplash.hide({fade: true, duration: 500})}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={isAuthenticated ? 'BottomTabs' : 'SignInScreen'}>
        {isAuthenticated ? (
          <Stack.Group>
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
