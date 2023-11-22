import React from 'react';
import {Text, StyleSheet, StatusBar, View, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import variables from '../../variables/colors';

interface HomeScreenProps {
  navigation: any;
}

const {height, width} = Dimensions.get('window');

const HomeScreen = ({navigation}: HomeScreenProps) => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar />
      <View style={styles.headingContainer}></View>
      <SafeAreaView style={styles.container}>
        {/* <Text style={{fontSize: 30, fontWeight: '700'}}>Home</Text> */}
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: variables.colors.lighterBg,
  },
  headingContainer: {
    height: height * 0.2,
    backgroundColor: variables.colors.lightBg,
    borderBottomEndRadius: width * 0.1,
    borderBottomLeftRadius: width * 0.1,
  },
});
