import { Fragment, useCallback } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';

import { Colors } from '@/src/constants/Colors';
import { Header, TeamPlayerCard } from '@/src/presentation/components';
import { TeamHeader, EmptyTeam } from '@/src/presentation/components/screens/Team';
import { useLoadTeam } from '@/src/presentation/hooks';
import { getStatusBarHeight } from '@/src/status-bar';

export default function TeamScreen() {
  const router = useRouter();

  const { team } = useLoadTeam();

  const handleEditPress = useCallback((teamId?: string) => {
    router.push(`/team/${teamId}`);
  }, []);

  return (
    <View style={styles.container}>
      <Header 
        title="Time" icon="pencil" 
        onButtonPress={() => handleEditPress(team?.id)}
        style={styles.header}
      />
      
      {
        team ? (
          <Fragment>
            <FlatList 
              data={team.players}
              keyExtractor={(item) => item.id}
              numColumns={2}
              ListHeaderComponent={() => (
                <TeamHeader
                  totalRating={team.totalRating}
                  teamName={team.name}
                  teamShield={team.shield} 
                />
              )}
              renderItem={({ item }) => (
                <TeamPlayerCard player={item} />
              )}
              columnWrapperStyle={styles.columnWrapper}
              showsVerticalScrollIndicator={false}
            />
          </Fragment>
        ) : (
          <EmptyTeam />
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: getStatusBarHeight + 24,
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 24,
  },
  columnWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 12,
  },
});
