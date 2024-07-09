import {
  ActivityIndicator,
  Button,
  RadioButton,
  Text,
  TextInput,
} from 'react-native-paper';
import variables from '../../../utils/variables/colors';
import {useState} from 'react';
import useApi, {apiClient} from '../../../hooks/useApi';
import {StackActions} from '@react-navigation/native';

const popAction = StackActions.pop(1);

const {View, StyleSheet, KeyboardAvoidingView, Alert} = require('react-native');

const CreateJournalEntry = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [value, setValue] = useState('');
  const {
    response: categories,
    loading: categoriesLoading,
    error: categoriesError,
    refetch: refetchSecond,
  } = useApi('GET', '/category');

  if (categoriesLoading) {
    return (
      <View style={styles.mainContainer}>
        <ActivityIndicator />
      </View>
    );
  }

  const submitForm = async () => {
    let payload = {
      title,
      content,
      category: value,
      mood: 'Excited',
      tags: ['movies'],
    };

    console.log(payload);

    try {
      const response = await apiClient.post('/journal/create', payload);
      if (response.data) {
        navigation.dispatch(popAction, {newDataAdded: true});
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error. An Error occured while creating your entry');
    }
  };

  return (
    <KeyboardAvoidingView
      contentContainerStyle={{flexGrow: 1}}
      style={styles.mainContainer}>
      <Text variant="titleLarge" style={styles.headerText}>
        Create New Entry
      </Text>
      <View style={styles.bodyContainer}>
        <TextInput
          label="Entry Title"
          value={title}
          onChangeText={text => setTitle(text)}
          mode="outlined"
          placeholder="Enter Journal Entry Title"
        />

        <TextInput
          label="Entry Description"
          value={content}
          onChangeText={text => setContent(text)}
          mode="outlined"
          placeholder="Enter Journal Entry Description"
          multiline
          numberOfLines={12}
          style={{marginTop: 10}}
        />
        <Text variant="bodyLarge" style={{marginTop: 20, marginBottom: 10}}>
          Select a category for Entry
        </Text>
        <View style={{border: 1, backgroundColor: 'white', borderRadius: 10}}>
          <RadioButton.Group
            onValueChange={value => setValue(value)}
            value={value}>
            {categories.map(categ => (
              <RadioButton.Item
                key={categ._id}
                label={categ.name}
                value={categ._id}
              />
            ))}
          </RadioButton.Group>
        </View>

        <Button
          buttonColor="#505168"
          mode="contained"
          style={{marginTop: 20, marginBottom: 10}}
          onPress={submitForm}>
          Submit Entry
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreateJournalEntry;

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    padding: 10,
  },

  mainContainer: {
    flex: 1,
    backgroundColor: variables.colors.white,
    padding: 10,
  },
  headerText: {
    marginTop: 20,
    fontWeight: '700',
    color: '#505168',
  },
});
