import { StyleSheet, Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { Colors } from '@/src/constants/Colors';

import { Icon, IconType } from './Icon';

type Variant = 'primary' | 'secondary';

type ButtonProps = RectButtonProps & {
    title: string;
    iconLeft?: IconType;
    iconRight?: IconType;
    iconColor?: string;
    variant?: Variant;
};

export function Button({
    title,
    iconLeft,
    iconRight,
    iconColor,
    variant = 'primary', 
    ...otherProps
}: ButtonProps) {
    const variants = {
        'primary': Colors.primary[600],
        'secondary': Colors.primary[50]
    };

    return (
        <RectButton 
            style={[styles.container, { 
                backgroundColor: variants[variant],
                justifyContent: iconRight ? 'space-between' : 'center'
            }]} 
            {...otherProps}
        >
            { iconLeft ? <Icon name={iconLeft} size={20} color={iconColor} /> : iconRight && (
                <View style={{ width: 24 }} />
            )}

            <Text style={styles.title}>{title}</Text>

            { iconRight && (
                <Icon name={iconRight} size={20} color={iconColor} /> 
            )}
        </RectButton>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 16,
        gap: 16,
    },
    title: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 18,
    },
});
