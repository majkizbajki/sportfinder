import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInScreen } from '../screens/SignInScreen';
import { SignUpScreen } from '../screens/SignUpScreen';
import { BottomTabs } from './BottomTabs';
import { useAuth } from '../hooks';
import auth from '@react-native-firebase/auth';
import { useCheckAuthMutation } from '../store/auth/authApiSlice';
import { useAppDispatch } from '../hooks/store';
import { updateAuthToken } from '../store/auth/authSlice';

export type RootStackParamList = {
    BottomTabs: undefined;
    SignInScreen: undefined;
    SignUpScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
    const [checkAuth] = useCheckAuthMutation();
    const dispatch = useAppDispatch();
    const { user } = useAuth();

    useEffect(() => {
        const subscriber = auth().onUserChanged(async authUser => {
            if (authUser) {
                try {
                    const authToken = await authUser.getIdToken();
                    dispatch(updateAuthToken(authToken));
                } catch (error) {
                    // TODO
                    // handle error
                }
            }
        });
        return subscriber;
    }, [dispatch]);

    const hideSplashScreen = async () => {
        auth().onUserChanged(async authUser => {
            if (authUser) {
                try {
                    const authToken = await authUser.getIdToken();
                    await checkAuth({ userId: authUser.uid, authToken });
                } catch (error) {
                    // TODO
                    // handle error
                }
            }
            setTimeout(async () => {
                await RNBootSplash.hide({ fade: true, duration: 500 });
            }, 500);
        });
    };

    return (
        <NavigationContainer onReady={hideSplashScreen}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={user ? 'BottomTabs' : 'SignInScreen'}
            >
                {user ? (
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
