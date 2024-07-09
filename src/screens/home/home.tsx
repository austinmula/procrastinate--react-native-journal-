import React, {useEffect, useState} from 'react';
import {StyleSheet, StatusBar, View, Dimensions, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import variables from '../../utils/variables/colors';
import {
  ActivityIndicator,
  Button,
  Card,
  Chip,
  FAB,
  IconButton,
  Text,
} from 'react-native-paper';
import useApi from '../../hooks/useApi';
import JournalList from '../../components/home/JounalList';

interface HomeScreenProps {
  navigation: any;
}

const {height, width} = Dimensions.get('window');

const filterItems5 = [
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

const journalEntries4 = [
  {
    id: '1',
    category: 'travel',
    title: 'Exploring the Alps',
    description:
      'Today, I hiked through the breathtaking Alps. The views were incredible, and I felt completely at peace with nature.',
    date: '2024-01-15',
  },
  {
    id: '2',
    category: 'personal',
    title: 'A Day with Family',
    description:
      'Spent the entire day with family, sharing stories and laughter. It was a reminder of how important they are to me.',
    date: '2024-02-10',
  },
  {
    id: '3',
    category: 'work',
    title: 'Project Milestone',
    description:
      'We reached a significant milestone in our project today. The team worked tirelessly, and the results were worth it.',
    date: '2024-03-05',
  },
  {
    id: '4',
    category: 'travel',
    title: 'Beach Getaway',
    description:
      'Relaxed on the sandy beaches of Hawaii. The sunset was stunning, and I felt rejuvenated by the ocean breeze.',
    date: '2024-04-18',
  },
  {
    id: '5',
    category: 'personal',
    title: 'Meditation Retreat',
    description:
      'Attended a meditation retreat this weekend. It helped me reconnect with myself and find inner peace.',
    date: '2024-05-23',
  },
  {
    id: '6',
    category: 'work',
    title: 'Successful Presentation',
    description:
      'Gave a presentation to the board today. It went well, and they were impressed with our progress.',
    date: '2024-06-12',
  },
  {
    id: '7',
    category: 'other',
    title: 'City Adventure',
    description:
      'Explored the vibrant city life of Tokyo. The food, culture, and energy of the city were unforgettable.',
    date: '2024-07-01',
  },
  {
    id: '8',
    category: 'personal',
    title: 'Birthday Celebration',
    description:
      'Celebrated my birthday with close friends. It was a joyful evening filled with laughter and memorable moments.',
    date: '2024-07-19',
  },
  {
    id: '9',
    category: 'work',
    title: 'Team Building',
    description:
      'Participated in a team-building event today. It was great to bond with colleagues outside of the usual work environment.',
    date: '2024-08-05',
  },
  {
    id: '10',
    category: 'other',
    title: 'Mountain Escape',
    description:
      'Spent the weekend in a cozy cabin in the mountains. The tranquility and fresh air were a perfect escape from city life.',
    date: '2024-08-25',
  },
];

type ItemProps = {title: string};

interface JournalApiResponse {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
}

interface SecondApiResponse {
  id: string;
  title: string;
  category: string;
  description: string;
}

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const [dateToday, setDateToday] = useState<Date>(new Date());
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const {
    response: journalEntries,
    loading: journalsLoading,
    error: firstError,
    refetch: refetchFirst,
  } = useApi<JournalApiResponse>('GET', '/journal');

  const {
    response: filterItems,
    loading: categoriesLoading,
    error: categoriesError,
    refetch: refetchSecond,
  } = useApi<SecondApiResponse>('GET', '/category');

  if (journalsLoading || categoriesLoading) {
    return (
      <View style={styles.mainContainer}>
        <ActivityIndicator />
      </View>
    );
  }

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
      onPress={() => setSelectedCategory(title)}>
      {title}
    </Chip>
  );

  const filteredEntries = journalEntries.filter(entry =>
    selectedCategory === 'All'
      ? true
      : entry.category.name.toLowerCase() === selectedCategory.toLowerCase(),
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
      {journalsLoading || categoriesLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.bodyContainer}>
          <View>
            <FlatList
              horizontal
              data={Array.isArray(filterItems) ? filterItems : []}
              renderItem={({item}) => <Item title={item.name} />}
              keyExtractor={item => item._id}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <JournalList filteredEntries={filteredEntries} />
        </View>
      )}

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
  entryContainer: {
    paddingTop: height * 0.04,
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
