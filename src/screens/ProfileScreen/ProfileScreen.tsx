import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, SafeAreaView, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabsParamList } from '../../navigation/BottomTabs';
import { useLogOutMutation } from '../../store/auth/authApiSlice';

type ProfileScreenProps = NativeStackScreenProps<BottomTabsParamList, 'ProfileScreen'>;

export const ProfileScreen = ({ navigation }: ProfileScreenProps) => {
    const [logOut, { isLoading }] = useLogOutMutation();
    const { t } = useTranslation();

    const handleSignOut = async () => {
        try {
            await logOut().unwrap();
        } catch (error) {
            // TODO
            // handle error
        }
    };

    return (
        <SafeAreaView>
            <Text>Profile</Text>
            <Button onPress={handleSignOut} title={t('auth.logout')} />
        </SafeAreaView>
    );
};
