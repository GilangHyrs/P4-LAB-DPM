import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ChildComponent from './ChildComponent';

export default function ParentComponent() {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const handleReset = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.scores}>
        <ChildComponent
          teamName="Team A"
          score={scoreA}
          onIncrease={() => setScoreA(scoreA + 1)}
          onDecrease={() => setScoreA(scoreA > 0 ? scoreA - 1 : 0)}
        />
        <ChildComponent
          teamName="Team B"
          score={scoreB}
          onIncrease={() => setScoreB(scoreB + 1)}
          onDecrease={() => setScoreB(scoreB > 0 ? scoreB - 1 : 0)}
        />
      </View>
      {scoreA >= 10 && (
        <Text style={styles.winner}>🎉 Congratulations to Team A for their victory!</Text>
      )}
      {scoreB >= 10 && (
        <Text style={styles.winner}>🎉 Congratulations to Team B for their victory!</Text>
      )}
      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.resetButtonText}>Reset Match</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  scores: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  winner: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6ab04c',
    marginBottom: 20,
    textAlign: 'center',
  },
  resetButton: {
    backgroundColor: '#15F5BA',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 5,
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});