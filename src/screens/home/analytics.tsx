import React from 'react'; 
import { Text, StyleSheet, StatusBar} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

interface AnalyticsScreenProps {
  navigation: any
}

const AnalyticsScreen = ({navigation}: AnalyticsScreenProps) =>{
  return(
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#040507"/>
      <Text style={{fontSize: 40, color: "white"}}>Analytics screen</Text>
    </SafeAreaView>
  );
}

export default AnalyticsScreen; 

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#040507", 
    alignItems: 'center', 
  }, 
})