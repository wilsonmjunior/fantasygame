import { 
  View, 
  StyleSheet, 
  FlatList, 
} from 'react-native';

import { Colors } from '@/src/constants/Colors';
import { Button, Header, TeamPlayerCard } from '@/src/presentation/components';
import { PlayersProgress } from '@/src/presentation/components/screens/SelectPlayers';
import { useSelectPlayers } from '@/src/presentation/hooks';

const TEAM_TOTAL = 11;

export default function SelectPlayersScreen() {
  const {
    availablePlayers,
    selectedPlayers,
    handleFinish,
    togglePlayerSelection,
  } = useSelectPlayers(); 

  return (
    <View style={styles.container}>
      <Header title="Selecionar Jogadores" style={styles.header} />

      <PlayersProgress 
        selectedPlayers={selectedPlayers} 
        total={TEAM_TOTAL}
        style={styles.playersProgress}
      />

      <FlatList
        data={availablePlayers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TeamPlayerCard
            player={item} 
            isSelected={selectedPlayers.some((player) => player.id === item.id)}
            onToggle={() => togglePlayerSelection(item)}
          />
        )}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />

      <View style={styles.finishButton}>
        <Button title="Finalizar Seleção" onPress={handleFinish} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 20,
  },
  header: {
    paddingHorizontal: 20,
  },
  playersProgress: {
    paddingTop: 16,
  },
  listContent: {
    paddingHorizontal: 12,
    paddingBottom: 80, 
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },

  finishButton: { 
    backgroundColor: Colors.background, 
    padding: 20,
  }
}); 
