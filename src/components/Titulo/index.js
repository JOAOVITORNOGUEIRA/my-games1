// src/components/Titulo/index.js

import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Titulo = ({ titulo, style }) => {
  return <Text style={[styles.titulo, style]}>{titulo}</Text>;
};

const styles = StyleSheet.create({
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FAFAFA', // Cor do título
    textShadowColor: '#7E57C2',
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 4,
  },
});

export default Titulo;
