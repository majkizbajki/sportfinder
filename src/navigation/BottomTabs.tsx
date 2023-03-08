import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/HomeScreen';
import {SportsScreen} from '../screens/SportsScreen';
import {EventsScreen} from '../screens/EventsScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import {
  EventsIcon,
  HomeIcon,
  ProfileIcon,
  SportsIcon,
} from '../assets/icons/BottomTabsIcons';

export type BottomTabsParamList = {
  HomeScreen: undefined;
  SportsScreen: undefined;
  EventsScreen: undefined;
  ProfileScreen: undefined;
};

const Tab = createBottomTabNavigator<BottomTabsParamList>();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#4D8B31'},
        tabBarActiveTintColor: '#241E4E',
        tabBarInactiveTintColor: '#DCDCDC',
        headerTransparent: true,
        tabBarHideOnKeyboard: true,
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => HomeIcon({color, size}),
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="SportsScreen"
        component={SportsScreen}
        options={{
          tabBarIcon: ({color, size}) => SportsIcon({color, size: size - 4}),
          title: 'Sports',
        }}
      />
      <Tab.Screen
        name="EventsScreen"
        component={EventsScreen}
        options={{
          tabBarIcon: ({color, size}) => EventsIcon({color, size}),
          title: 'My events',
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => ProfileIcon({color, size}),
          title: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};
