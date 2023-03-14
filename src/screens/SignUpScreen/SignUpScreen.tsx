import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, SafeAreaView, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation';

type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
    const { t } = useTranslation();
    return (
        <SafeAreaView>
            <Text>{t('auth.signUp')}</Text>
            <Button title="Sign up here" onPress={() => console.log('Sign Up')} />
            <Button onPress={() => navigation.navigate('SignInScreen')} title={t('auth.signIn')} />
        </SafeAreaView>
    );
};
