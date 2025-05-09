import { Platform } from "react-native";
import { Stack } from "expo-router";

export default function TeamLayout() {
    return (
        <Stack 
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    paddingTop: Platform.OS === 'android' ? 24 : 0,
                    // backgroundColor: '#1C1C1C',
                    // borderTopLeftRadius: Platform.OS === 'android' ? 20 : 0,
                    // borderTopRightRadius: Platform.OS === 'android' ? 20 : 0,
                    // marginTop: Platform.OS === 'android' ? 40 : 0,
                    // shadowColor: "#00000060",
                    // shadowOffset: { width: 0, height: 2 },
                    // shadowOpacity: 0.25,
                    // shadowRadius: 4,
                    // elevation: 5,
                }
            }} 
        >
            <Stack.Screen 
                name="[team-id]" 
            /> 
            <Stack.Screen 
                name="select-players" 
                options={{
                    animation: 'slide_from_right',
                }}
            />
        </Stack>
    )
}