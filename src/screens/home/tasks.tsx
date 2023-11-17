import React from 'react';
import {Text, StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface TasksScreenProps {
  navigation: any;
}

const TasksScreen = ({navigation}: TasksScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Text style={{fontSize: 30, fontWeight: '700'}}>Tasks / ToDo</Text>
    </SafeAreaView>
  );
};

export default TasksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
