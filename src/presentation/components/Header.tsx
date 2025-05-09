import {
    StyleProp,
    StyleSheet,
    Text,
    View,
    ViewStyle,
} from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

import { Colors } from "@/src/constants/Colors";
import { Icon, IconType } from "./Icon";

type HeaderProps = {
    title: string;
    icon?: IconType;
    style?: StyleProp<ViewStyle>;
    onButtonPress?(): void;
}

export function Header({ title, icon, style, onButtonPress }: HeaderProps) {
    const router = useRouter();

    return (
        <View style={[styles.container, style]}>
            <BorderlessButton onPress={() => router.back()}>
                <Icon name="chevron-back" size={24} color={Colors.white} />
            </BorderlessButton>
            
            <Text style={styles.title}>{title}</Text>

            {
                icon ? (
                    <View style={styles.editButtonContainer}>
                        <BorderlessButton 
                            onPress={onButtonPress} 
                            style={styles.editButton}
                        >
                            <Icon name="pencil" color={Colors.white} size={16} />
                        </BorderlessButton>
                    </View>
                ) : (
                    <View style={{ width: 24 }} /> 
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        color: Colors.white,
        fontFamily: 'Poppins_600SemiBold'
    },
    editButtonContainer: { 
        flexDirection: 'row', 
        justifyContent: 'flex-end',
    },
    editButton: {
        width: 26, 
        height: 26, 
        borderRadius: 4, 
        backgroundColor: Colors.primary[50]+20, 
        alignItems: 'center', 
        justifyContent: 'center',
    }
});
