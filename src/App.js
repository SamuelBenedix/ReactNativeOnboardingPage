import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, FlatList} from 'react-native';
import OnBoarding from './components/OnBoarding';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <OnBoarding />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
