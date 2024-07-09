import React from 'react';
import {Alert, Dimensions, FlatList, StyleSheet, View} from 'react-native';
import {Button, Card, Dialog, Portal, Text} from 'react-native-paper';
import {apiClient} from '../../hooks/useApi';

const {height, width} = Dimensions.get('window');

const JournalList = ({navigation, filteredEntries, refetchJournals}) => {
  const [visible, setVisible] = React.useState(false);
  const [currentId, setCurrentId] = React.useState(null);

  const showDialog = id => {
    setCurrentId(id);
    setVisible(true);
  };

  const goToEdit = (id, journal) => {
    navigation.navigate('createEntry', {
      id,
      journal,
    });
  };

  const deleteJournalEntry = async () => {
    try {
      const response = await apiClient.delete('/journal/delete/' + currentId);
      if (response.data) {
        hideDialog();
        refetchJournals();
        Alert.alert('Deleted Successfully');
      }
    } catch (error) {
      console.log(error);
      hideDialog();
      Alert.alert('Something Went Wrong');
    }
  };

  const hideDialog = () => setVisible(false);

  const Entry = ({
    title,
    category,
    categoryId,
    description,
    date,
    showDialog,
    id,
  }) => (
    <Card style={{margin: 10}}>
      <Card.Title title="" subtitle={category} />
      <Card.Content>
        <Text variant="titleLarge">{title}</Text>
        <Text variant="bodyMedium">{description}</Text>
      </Card.Content>
      <Card.Actions style={{marginTop: 20}}>
        <Button
          onPress={() =>
            goToEdit(id, {title, description, category: categoryId})
          }>
          Edit
        </Button>
        <Button buttonColor="#c73218" onPress={() => showDialog(id)}>
          Delete
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.entryContainer}>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">
              This action will permanently delete your journal. Do you still
              want to continue?
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={deleteJournalEntry}>ok</Button>
            <Button onPress={hideDialog}>cancel</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <FlatList
        data={filteredEntries}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <Entry
            category={item.category.name}
            categoryId={item.category._id}
            description={item.content}
            title={item.title}
            date={item.date}
            id={item._id}
            showDialog={showDialog}
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
