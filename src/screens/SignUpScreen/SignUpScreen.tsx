import React from 'react';
import {Text, SafeAreaView, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation';

type SignUpScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SignUpScreen'
>;

export const SignUpScreen = ({navigation}: SignUpScreenProps) => {
  return (
    <SafeAreaView>
      <Text>Sign Up</Text>
      <Button
        onPress={() => navigation.navigate('SignInScreen')}
        title="Sign In"
      />
    </SafeAreaView>
  );
};
