import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ParentComponent from './src/components/ParentComponent'; // Perbaikan import

export default function ExampleComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>⚽ SCORE FUTSAL ⚽</Text>
      <ParentComponent /> {/* Menghapus {} kosong */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#9A3B3B',
    marginBottom: 20,
    textShadowColor: '#9A3B3B',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
});