import React, { useCallback } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { Button, Icon } from '../presentation/components';
import { Colors } from '../constants/Colors';

const width = Dimensions.get('screen').width;

export default function NotFoundScreen() {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <View style={styles.container}>
      <View style={styles.illustrationContainer}>
        <Icon name="FGGaming" size={96} color={Colors.neutral[500]} />
      </View>
      
      <Text style={styles.title}>Página não encontrada</Text>
      
      <Text style={styles.description}>
        A página que você está procurando não existe ou foi removida.
      </Text>

      <View style={styles.backButtonContainer}>
        <Button title="Voltar" onPress={handleBack} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustrationContainer: {
    marginBottom: 32,
  },
  title: {
    fontSize: 22,
    color: Colors.white,
    textAlign: 'center',
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: Colors.neutral[500],
    textAlign: 'center',
    marginBottom: 32,
    fontFamily: 'Poppins_400Regular',
  },
  backButtonContainer: {
    width,
    alignItems: 'center',
  },
});
