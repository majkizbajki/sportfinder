import React from 'react';
import { ColorValue } from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloGymConfig from './Fontello/config.json';

interface IconProps {
    color?: number | ColorValue;
    size?: number;
}

export const HomeIcon = ({ color, size }: IconProps) => {
    return <IoniconsIcon name="home-outline" size={size} color={color} />;
};

export const SportsIcon = ({ color, size }: IconProps) => {
    const GymIcon = createIconSetFromFontello(fontelloGymConfig);
    return <GymIcon name="gym-dumbbell-icon" size={size} color={color} />;
};

export const EventsIcon = ({ color, size }: IconProps) => {
    return <IoniconsIcon name="heart-outline" size={size} color={color} />;
};

export const ProfileIcon = ({ color, size }: IconProps) => {
    return <IoniconsIcon name="person-outline" size={size} color={color} />;
};
