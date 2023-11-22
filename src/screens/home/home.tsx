import React, {useState} from 'react';
import {Text, StyleSheet, StatusBar, View, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import variables from '../../variables/colors';

interface HomeScreenProps {
  navigation: any;
}

const {height, width} = Dimensions.get('window');

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const [dateToday, setDateToday] = useState<Date>(new Date());
  return (
    <View style={styles.mainContainer}>
      <StatusBar />
      <View style={styles.headingContainer}>
        <View>
          <Text style={{fontSize: 24, marginTop: 10, fontWeight: '600'}}>
            Hello Stranger,
          </Text>
          <Text style={{marginTop: 10}}>Today on your Schedule.</Text>
        </View>
        <View style={styles.dateContainer}>
          <View style={styles.dateContainerTop}>
            <Text style={styles.monthText}>SEPTEMBER</Text>
          </View>
          <View style={styles.dateCard}>
            <Text style={styles.dateText}>{dateToday.getDate()}</Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={{fontSize: 30, fontWeight: '700'}}>Home</Text>
      </View>
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
    justifyContent: 'space-between',
    flexDirection: 'row',
    // alignItems: 'center',
    paddingHorizontal: width * 0.1,
  },
  dateContainer: {
    height: '65%',
    backgroundColor: 'red',
    width: 100,
    borderRadius: 24,
    overflow: 'hidden',
    // Android
    elevation: 8, // Add elevation for box shadow
    // iOS
    shadowColor: variables.colors.darkbg,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  dateContainerTop: {
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  monthText: {
    fontSize: 10,
    fontWeight: '800',
    color: variables.colors.white,
  },
  dateCard: {
    // borderRadius: 24,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: variables.colors.darkerbg,
  },
  dateText: {
    fontSize: 40,
    letterSpacing: 3,
    fontWeight: 'bold',
    color: 'white',
  },
});
