import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Surface, TextInput} from 'react-native-paper';

export default function SignInScreen() {
  const [text, setText] = useState('');
  function goToSignUp() {
    console.log('somethinf');
  }
  return (
    <View style={styles.mainContainer}>
      <Surface style={styles.surface} elevation={1}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Sign In</Text>
          <Text style={{marginTop: 10}}>Please enter username and password to login</Text>
        </View>
        <TextInput
          label="Username or Email"
          value={text}
          onChangeText={text => setText(text)}
          mode="outlined"
          left={<TextInput.Icon icon="account" />}
        />
        <TextInput
          label="Password"
          secureTextEntry
          mode="outlined"
          right={<TextInput.Icon icon="eye" />}
          left={<TextInput.Icon icon="lock" />}
        />

        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Sign In
        </Button>

        <View style={styles.textContainer}>
          <Text>
            Don't have an account?{' '}
            <Text style={styles.signInCta} onPress={goToSignUp}>
              Create New Account
            </Text>
          </Text>
        </View>
      </Surface>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  surface: {
    padding: 15,
    width: '90%',
    gap: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textInput: {
    width: '100%',
  },

  textContainer: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  signInCta: {
    fontWeight: '700',
    cursor: 'pointer',
  },
  headingText: {
    fontWeight: '700',
    fontSize: 32,
  },
  headingContainer: {
    paddingTop: 25,
  },
});
