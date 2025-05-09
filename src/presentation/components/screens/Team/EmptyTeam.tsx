import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';

import TeamIcon from '@/assets/icons/team.svg';
import { Colors } from '@/src/constants/Colors';
import { Icon } from '@/src/presentation/components';

export function EmptyTeam() {
  const router = useRouter();

  const handleCreateTeam = () => {
    router.push('/team/edit');
  };

  return (
    <View style={styles.container}>
      <View style={styles.svgContainer}>
        <TeamIcon width={96} height={96} color={Colors.neutral[500]} />
      </View>

      <Text style={styles.title}>Nenhum time cadastrado</Text>
      <Text style={styles.description}>
        Crie seu time para começar a jogar e competir com outros jogadores.
      </Text>

      <RectButton style={styles.button} onPress={handleCreateTeam}>
        <Icon name="add" color={Colors.secondary[600]} size={40} />
      </RectButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  svgContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins_600SemiBold',
    color: Colors.neutral[700],
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: Colors.neutral[500],
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: Colors.primary[600],
    padding: 10,
    borderRadius: 48,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  }
}); 