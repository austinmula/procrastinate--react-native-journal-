import React, {useState} from 'react';
import {StyleSheet, StatusBar, View, Dimensions, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import variables from '../../utils/variables/colors';
import {Button, Card, Chip, FAB, IconButton, Text} from 'react-native-paper';

interface HomeScreenProps {
  navigation: any;
}

const {height, width} = Dimensions.get('window');

const filterItems = [
  {
    id: '1',
    title: 'All',
  },
  {
    id: '2',
    title: 'Personal',
  },
  {
    id: '3',
    title: 'Work',
  },
  {
    id: '4',
    title: 'Travel',
  },
  {
    id: '5',
    title: 'Other',
  },
];

type ItemProps = {title: string};

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const [dateToday, setDateToday] = useState<Date>(new Date());

  const Item = ({title}: ItemProps) => (
    <Chip
      textStyle={{
        color: 'white',
      }}
      style={{
        marginLeft: 10,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 20,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#505168',
      }}
      onPress={() => console.log('Pressed')}>
      {title}
    </Chip>
  );

  const monthInText = dateToday.toLocaleString('default', {month: 'long'});
  return (
    <View style={styles.mainContainer}>
      <StatusBar />
      <View style={styles.headingContainer}>
        <View>
          <Text variant="headlineMedium">Hello Stranger,</Text>
          <Text variant="titleSmall" style={{marginTop: 10}}>
            Today on your Schedule.
          </Text>
        </View>
        <View style={styles.dateContainer}>
          <View style={styles.dateContainerTop}>
            <Text variant="labelSmall" style={styles.monthText}>
              {monthInText}
            </Text>
          </View>
          <View style={styles.dateCard}>
            <Text style={styles.dateText}>{dateToday.getDate()}</Text>
          </View>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <View>
          <FlatList
            horizontal
            data={filterItems}
            renderItem={({item}) => <Item title={item.title} />}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {/* <Text style={{fontSize: 30, fontWeight: '700'}}>Home</Text> */}
      </View>
      <FAB
        icon="plus"
        style={styles.fab}
        variant="primary"
        onPress={() => navigation.navigate('createEntry')}
        theme={{colors: {primary: 'red'}}}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    paddingTop: height * 0.04,
    paddingLeft: width * 0.01,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: variables.colors.white,
    // backgroundColor: variables.colors.lighterBg,
  },
  headingContainer: {
    height: height * 0.2,
    backgroundColor: variables.colors.lightBg,
    borderBottomEndRadius: width * 0.1,
    borderBottomLeftRadius: width * 0.1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.06,
  },
  dateContainer: {
    height: '65%',
    backgroundColor: variables.colors.tan,
    width: 100,
    borderRadius: 10,
    overflow: 'hidden',
    // Android
    elevation: 8, // Add elevation for box shadow
    // iOS
    shadowColor: variables.colors.black,
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
    color: variables.colors.white,
  },
  dateCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: variables.colors.darkerbg,
  },
  dateText: {
    fontSize: 40,
    letterSpacing: 3,
    fontWeight: 'bold',
    color: variables.colors.lighterBg,
  },
  item: {
    marginHorizontal: 5,
    // backgroundColor: variables.colors.lightBg,
    width: width / 2,
    maxWidth: 300,
    height: height * 0.3,
  },
  fab: {
    backgroundColor: '#eaefd3',
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
