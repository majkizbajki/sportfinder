import React from 'react';
import {Text, SafeAreaView, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation';
import {useAuth} from '../../hooks';

type SignInScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SignInScreen'
>;

export const SignInScreen = ({navigation}: SignInScreenProps) => {
  const {signIn} = useAuth();

  return (
    <SafeAreaView>
      <Text>Sign In</Text>
      <Button onPress={signIn} title="Sign In" />
      <Button
        onPress={() => navigation.navigate('SignUpScreen')}
        title="Sign Up"
      />
    </SafeAreaView>
  );
};
