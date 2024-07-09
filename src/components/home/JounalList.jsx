import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import {Card, Text} from 'react-native-paper';

const {height, width} = Dimensions.get('window');

const JournalList = ({filteredEntries}) => {
  console.log(filteredEntries);
  const Entry = ({title, category, description, date}) => (
    <Card style={{margin: 10}}>
      <Card.Title title="" subtitle={category} />
      <Card.Content>
        <Text variant="titleLarge">{title}</Text>
        <Text variant="bodyMedium">{description}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.entryContainer}>
      <FlatList
        data={filteredEntries}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <Entry
            category={item.category.name}
            description={item.content}
            title={item.title}
            date={item.date}
            id={item.id}
          />
        )}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default JournalList;

const styles = StyleSheet.create({
  entryContainer: {
    paddingTop: height * 0.04,
  },
  item: {
    marginHorizontal: 5,
    // backgroundColor: variables.colors.lightBg,
    width: width / 2,
    maxWidth: 300,
    height: height * 0.3,
  },
});
