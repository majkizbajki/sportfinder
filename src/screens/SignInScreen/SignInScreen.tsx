import React from 'react';
import { Text, SafeAreaView, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation';
import { useTranslation } from 'react-i18next';
import { useSignInMutation } from '../../store/auth/authApiSlice';

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignInScreen'>;

export const SignInScreen = ({ navigation }: SignInScreenProps) => {
    const { t, i18n } = useTranslation();
    const [signIn] = useSignInMutation();
    const style = styles();

    const handleSignIn = async () => {
        try {
            await signIn({ email: 'mrmajki552@gmail.com', password: 'Testowe1234' }).unwrap();
        } catch (error) {
            // TODO
            // handle error
        }
    };

    return (
        <SafeAreaView>
            <Text>{t('auth.signIn')}</Text>
            <Button onPress={handleSignIn} title={t('auth.signIn')} />
            <Button onPress={() => i18n.changeLanguage('pl')} title="Change language" />
            <Button onPress={() => navigation.navigate('SignUpScreen')} title={t('auth.signUp')} />
        </SafeAreaView>
    );
};

const styles = () => StyleSheet.create({});
