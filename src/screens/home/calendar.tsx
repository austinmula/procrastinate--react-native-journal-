import React from 'react';
import {Text, StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface CalendarScreenProps {
  navigation: any;
}

const CalendarScreen = ({navigation}: CalendarScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Text style={{fontSize: 30, fontWeight: '700'}}>Calendar</Text>
    </SafeAreaView>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
