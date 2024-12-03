import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ChildComponent({ teamName, score, onIncrease, onDecrease }) {
  return (
    <View style={styles.container}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.score}>{score}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttonPlus} onPress={onIncrease}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonMinus} onPress={onDecrease}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 15,
    padding: 10,
    backgroundColor: '#2d3436',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    width: '50%',
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#15F5BA',
    marginBottom: 10,
  },
  score: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FF004D',
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
     color: '#000000',
  },
  buttonPlus: {
    backgroundColor: '#000000',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
  },
  buttonMinus: {
    backgroundColor: '#0174BE',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
