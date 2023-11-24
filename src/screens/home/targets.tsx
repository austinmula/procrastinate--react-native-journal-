import React from 'react';
import {Text, StyleSheet, StatusBar, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import variables from '../../utils/variables/colors';

interface GoalsScreenProps {
  navigation: any;
}

const GoalsScreen = ({navigation}: GoalsScreenProps) => {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        {/* <Text style={{fontSize: 30, fontWeight: '700'}}>Goals</Text> */}
      </SafeAreaView>
    </View>
  );
};

export default GoalsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: variables.colors.lighterBg,
  },
});
