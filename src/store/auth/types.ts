type FavouriteSportsType = {
    first: string;
    second: string;
    third: string;
};

type SocialMediaType = {
    facebook: string | null;
    instagram: string | null;
    whatsapp: string | null;
};

export type UserType = {
    city: string;
    country: string;
    email: string;
    favouriteSports: FavouriteSportsType;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    photoUrl: string | null;
    socialMedia: SocialMediaType;
    userId: string;
};

export type AuthState = {
    user: UserType | null;
    token: string | null;
};

export type AuthCredentialsType = {
    email: string;
    password: string;
};
