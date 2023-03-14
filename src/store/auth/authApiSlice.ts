import { apiSlice } from '../../api/apiSlice';
import { AuthCredentialsType, AuthState, UserType } from './types';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        signIn: builder.mutation<AuthState, AuthCredentialsType>({
            async queryFn({ email, password }: AuthCredentialsType) {
                try {
                    const authResponse = await auth().signInWithEmailAndPassword(email, password);
                    const token = await authResponse.user.getIdToken();

                    const userData = await firestore()
                        .collection('users')
                        .where('userId', '==', authResponse.user.uid)
                        .get();
                    const user: UserType = {
                        city: userData.docs[0].data().city,
                        country: userData.docs[0].data().country,
                        email: userData.docs[0].data().email,
                        favouriteSports: {
                            first: userData.docs[0].data().favouriteSports.first,
                            second: userData.docs[0].data().favouriteSports.second,
                            third: userData.docs[0].data().favouriteSports.third
                        },
                        firstName: userData.docs[0].data().firstName,
                        lastName: userData.docs[0].data().lastName,
                        phoneNumber: userData.docs[0].data().phoneNumber,
                        photoUrl: userData.docs[0].data().photoUrl,
                        socialMedia: {
                            facebook: userData.docs[0].data().socialMedia.facebook,
                            instagram: userData.docs[0].data().socialMedia.instagram,
                            whatsapp: userData.docs[0].data().socialMedia.whatsapp
                        },
                        userId: authResponse.user.uid
                    };

                    return { data: { user, token } };
                } catch (error: any) {
                    if (error.code === 'auth/invalid-email' || error.code === 'auth/invalid-password') {
                        return { error: error.code };
                    }

                    if (error.code === 'auth/unverified-email') {
                        return { error: error.code };
                    }
                    return { error };
                }
            },
            invalidatesTags: ['User']
        }),
        logOut: builder.mutation<AuthState, void>({
            async queryFn() {
                try {
                    await auth().signOut();
                    return { data: { user: null, token: null } };
                } catch (error: any) {
                    return { error };
                }
            },
            invalidatesTags: ['User']
        }),
        checkAuth: builder.mutation<AuthState, { userId: string; authToken: string }>({
            async queryFn({ userId, authToken }) {
                try {
                    const userData = await firestore().collection('users').where('userId', '==', userId).get();
                    const user: UserType = {
                        city: userData.docs[0].data().city,
                        country: userData.docs[0].data().country,
                        email: userData.docs[0].data().email,
                        favouriteSports: {
                            first: userData.docs[0].data().favouriteSports.first,
                            second: userData.docs[0].data().favouriteSports.second,
                            third: userData.docs[0].data().favouriteSports.third
                        },
                        firstName: userData.docs[0].data().firstName,
                        lastName: userData.docs[0].data().lastName,
                        phoneNumber: userData.docs[0].data().phoneNumber,
                        photoUrl: userData.docs[0].data().photoUrl,
                        socialMedia: {
                            facebook: userData.docs[0].data().socialMedia.facebook,
                            instagram: userData.docs[0].data().socialMedia.instagram,
                            whatsapp: userData.docs[0].data().socialMedia.whatsapp
                        },
                        userId: userId
                    };

                    return { data: { user, token: authToken } };
                } catch (error) {
                    return { error };
                }
            }
        })
    }),
    overrideExisting: true
});

export const { useSignInMutation, useLogOutMutation, useCheckAuthMutation } = authApiSlice;
