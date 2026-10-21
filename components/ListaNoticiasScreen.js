import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function DetalheNoticiaScreen({ route, navigation }) {
  const { noticia } = route.params;

  // Customização dinâmica do Header (Requisito do desafio)
  useLayoutEffect(() => {
    navigation.setOptions({
      title: noticia.titulo,
    });
  }, [navigation, noticia]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.categoria}>{noticia.categoria}</Text>
      <Text style={styles.titulo}>{noticia.titulo}</Text>
      <Text style={styles.texto}>{noticia.conteudo}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  content: {
    padding: 20,
  },
  categoria: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 6,
    textTransform: 'uppercase',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
  },
  texto: {
    fontSize: 15,
    color: '#374151',
    lineHeight: 24,
  },
});