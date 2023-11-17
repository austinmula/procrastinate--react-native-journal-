import React from 'react';
import {Text, StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen = ({navigation}: HomeScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Text style={{fontSize: 30, fontWeight: '700'}}>Home</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
