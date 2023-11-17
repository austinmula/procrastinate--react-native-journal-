import React from 'react';
import {Text, StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface GoalsScreenProps {
  navigation: any;
}

const GoalsScreen = ({navigation}: GoalsScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Text style={{fontSize: 30, fontWeight: '700'}}>Goals</Text>
    </SafeAreaView>
  );
};

export default GoalsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
