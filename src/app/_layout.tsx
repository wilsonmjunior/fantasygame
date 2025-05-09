import React, { useEffect } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_900Black,
  useFonts,
} from '@expo-google-fonts/poppins';
import ToastManager from 'toastify-react-native'

import { Colors } from '../constants/Colors';
import { LoadTeamProvider } from '../presentation/hooks';

SplashScreen.setOptions({
  duration: 400,
  fade: true,
});
 
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_900Black,
  });

  useEffect(() => {
    const hideSplashScreen = async () => {
      if (fontsLoaded || fontError) {
        await SplashScreen.hideAsync();
      }
    };

    hideSplashScreen();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar backgroundColor="#1C1C1C" barStyle="light-content" translucent />

      <LoadTeamProvider>
        <Stack 
          screenOptions={{ 
            headerShown: false,
            animation: 'fade',
          }}
          initialRouteName="onboarding"
        >
          <Stack.Screen 
            name="index" 
            options={{ 
              gestureEnabled: false,
            }} 
          />
          <Stack.Screen 
            name="onboarding" 
            options={{ 
              animation: 'fade',
              gestureEnabled: false,
            }} 
          />
          <Stack.Screen 
            name="(tabs)" 
            options={{ 
              gestureEnabled: false,
            }} 
          />
          <Stack.Screen 
            name="profile" 
            options={{ 
              animation: 'slide_from_left',
              gestureEnabled: true,
            }} 
          />
          <Stack.Screen 
            name="team" 
            options={{ 
              animation: 'slide_from_bottom',
              presentation: 'modal',
              gestureEnabled: true,
            }} 
          />
        </Stack>
      </LoadTeamProvider>
      <ToastManager />
    </GestureHandlerRootView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: Colors.background
  }
});
