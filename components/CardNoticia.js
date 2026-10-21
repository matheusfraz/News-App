import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CardNoticia({ noticia, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <Text style={styles.categoria}>{noticia.categoria}</Text>
      <Text style={styles.titulo}>{noticia.titulo}</Text>
      <Text style={styles.resumo}>{noticia.resumo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  categoria: {
    fontSize: 11,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 6,
  },
  resumo: {
    fontSize: 13,
    color: '#4B5563',
    lineHeight: 18,
  },
});