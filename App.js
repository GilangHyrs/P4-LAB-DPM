import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import ExampleComponent from './ExampleComponent';

const themes = [
  { id: 1, backgroundColor: '#B1F0F7', color: '#81BFDA' }, 
  { id: 2, backgroundColor: '#00FF9C', color: '#ffffff' }, 
  { id: 3, backgroundColor: '#AF8F6F', color: '#000000' }, 
  { id: 4, backgroundColor: '#3C3D37', color: '#ffffff' }, 
  { id: 5, backgroundColor: '#7A1CAC', color: '#ffffff' }, 
];

export default function App() {
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  useEffect(() => {
    let isMounted = true;
    
    const interval = setInterval(() => {
      if (isMounted) {
        const currentIndex = themes.findIndex((theme) => theme.id === currentTheme.id);
        const nextIndex = (currentIndex + 1) % themes.length;
        setCurrentTheme(themes[nextIndex]);
      }
    }, 5000); 

    return () => {
      isMounted = false;
      clearInterval(interval);
    }; 
  }, [currentTheme]);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: currentTheme.backgroundColor }]}>
      <View style={styles.content}>
        <Text style={[styles.text, { color: currentTheme.color }]}>
          {currentTheme.id}
        </Text>
        <ExampleComponent />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
