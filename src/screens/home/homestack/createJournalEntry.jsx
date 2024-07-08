import {Button, RadioButton, Text, TextInput} from 'react-native-paper';
import variables from '../../../utils/variables/colors';
import {useState} from 'react';

const {View, StyleSheet, KeyboardAvoidingView} = require('react-native');

const CreateJournalEntry = () => {
  const [text, setText] = useState('');
  const [value, setValue] = useState('personal');
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
          value={text}
          onChangeText={text => setText(text)}
          mode="outlined"
          placeholder="Enter Journal Entry Title"
        />

        <TextInput
          label="Entry Description"
          value={text}
          onChangeText={text => setText(text)}
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
            <RadioButton.Item label="Personal" value="personal" />
            <RadioButton.Item label="Work" value="work" />
            <RadioButton.Item label="Travel" value="travel" />
            <RadioButton.Item label="other" value="other" />
          </RadioButton.Group>
        </View>

        <Button
          buttonColor="#505168"
          mode="contained"
          style={{marginTop: 20, marginBottom: 10}}
          onPress={() => console.log('yo')}>
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
