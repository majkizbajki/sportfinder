import React from 'react';
import {Text, SafeAreaView, Button} from 'react-native';
import {useAuth} from '../../hooks';

export const ProfileScreen = () => {
  const {signOut} = useAuth();
  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <Button onPress={signOut} title="Log out" />
    </SafeAreaView>
  );
};
