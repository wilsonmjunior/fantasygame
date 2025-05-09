import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    KeyboardAvoidingView,
    Platform,
  } from 'react-native';
  import { useLocalSearchParams } from 'expo-router';
  
  import { Colors } from '@/src/constants/Colors';
  import { Button, Header, Input } from '@/src/presentation/components';
  import { useEditTeam } from '@/src/presentation/hooks';

type SearchParams = {
    "team-id": string;
};
  
export default function EditTeamScreen() {
    const params = useLocalSearchParams<SearchParams>();

    const {
        isImageValid, 
        teamName,
        teamShield,
        checkImageUrl,
        // setIsImageValid,
        setTeamName,
        handleNext,
    } = useEditTeam({ teamId: params['team-id'] });

    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={styles.scrollContent}>
                <Header title={params['team-id'] ? "Editar Time" : "Criar Time"} />
    
                <View style={styles.previewContainer}>
                    <View style={styles.shieldPreview}>
                        <Image 
                            source={{ 
                                uri: isImageValid ? teamShield : 'https://via.placeholder.com/200x200?text=Imagem+Inválida'
                            }} 
                            style={styles.shieldImage}
                            // onError={() => teamShield && setIsImageValid(false)}
                        />
                    </View>
                    <Text style={styles.previewName}>{teamName || 'Nome do Time'}</Text>
                </View>
    
                <View>
                    <Input 
                        title="Nome do Time"
                        value={teamName}
                        onChangeText={setTeamName}
                        placeholder="Digite o nome do seu time"
                        placeholderTextColor={Colors.neutral[500]}
                    />

                    <Input 
                        title="URL do Escudo"
                        style={!isImageValid && styles.inputError}
                        value={teamShield}
                        onChangeText={checkImageUrl}
                        placeholder="URL da imagem do escudo"
                        placeholderTextColor={Colors.neutral[500]}
                    >
                        {!isImageValid && (
                            <Text style={styles.errorText}>
                                A URL não parece ser uma imagem válida
                            </Text>
                        )}
                    </Input>
                </View>
    
                <View style={styles.nextButton}>
                    <Button 
                        title="Próximo"
                        iconRight="chevron-forward"
                        onPress={handleNext}
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    scrollContent: {
        flex: 1,
        padding: 20,
    },
  
    previewContainer: {
        alignItems: 'center',
        marginVertical: 32,
    },
    shieldPreview: {
        width: 140,
        height: 140,
        borderRadius: 70,
        backgroundColor: Colors.neutral[300],
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        overflow: 'hidden',
    },
    shieldImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: Colors.neutral[100],
    },
    previewName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.primary[50],
    },
  
    inputError: {
        borderColor: Colors.error[600],
    },
    errorText: {
        color: Colors.error[600],
        marginTop: 6,
        fontSize: 14,
    },
  
    nextButton: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 12
    }
});
  