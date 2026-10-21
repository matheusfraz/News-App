import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SobreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre</Text>

      {/* Ícone representando a imagem do jornal da captura de ecrã */}
      <View style={styles.imageContainer}>
        <MaterialCommunityIcons name="newspaper-variant-outline" size={120} color="#1F2937" />
      </View>

      <View style={styles.divider} />

      <View style={styles.textContainer}>
        <Text style={styles.description}>Esse é o Mini App de Notícias.</Text>
        <Text style={styles.description}>
          Você vai praticar diferentes tipos de navegação com React-Native:
        </Text>
        <Text style={styles.bullet}>• Drawer (raiz)</Text>
        <Text style={styles.bullet}>• Tabs (Tecnologia/Esportes)</Text>
        <Text style={styles.bullet}>• Stacks (Lista → Detalhes)</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('NoticiasTab')}
      >
        <Text style={styles.buttonText}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    padding: 24,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 10,
  },
  imageContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#D1D5DB',
    width: '100%',
    marginVertical: 10,
  },
  textContainer: {
    width: '100%',
    alignSelf: 'flex-start',
  },
  description: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 8,
    lineHeight: 20,
  },
  bullet: {
    fontSize: 14,
    color: '#374151',
    marginLeft: 10,
    marginBottom: 6,
  },
  button: {
    backgroundColor: '#2196F3',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});