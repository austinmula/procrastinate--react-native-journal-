import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Surface, TextInput} from 'react-native-paper';

export default function SignUpScreen({navigation}) {
  const [text, setText] = useState('');
  function goToSignIn() {
    navigation.navigate('signin');
  }
  return (
    <View style={styles.mainContainer}>
      <Surface style={styles.surface} elevation={1}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Sign Up</Text>
          <Text style={{marginTop: 10}}>
            Please enter your details to create an account
          </Text>
        </View>
        <TextInput
          label="Full Name"
          value={text}
          onChangeText={text => setText(text)}
          mode="outlined"
          left={<TextInput.Icon icon="account" />}
        />
        <TextInput
          label="Email Address"
          value={text}
          onChangeText={text => setText(text)}
          mode="outlined"
          left={<TextInput.Icon icon="email" />}
        />
        <TextInput
          label="Password"
          secureTextEntry
          mode="outlined"
          right={<TextInput.Icon icon="eye" />}
          left={<TextInput.Icon icon="lock" />}
        />
        <TextInput
          label="Confirm Password"
          secureTextEntry
          mode="outlined"
          right={<TextInput.Icon icon="eye" />}
          left={<TextInput.Icon icon="lock" />}
        />

        <Button
          buttonColor="#505168"
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Create Account
        </Button>

        <View style={styles.textContainer}>
          <Text>
            I already have an account?{' '}
            <Text style={styles.signInCta} onPress={goToSignIn}>
              Sign In
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
    backgroundColor: '#eaefd3',
  },
  surface: {
    padding: 20,
    width: '90%',
    gap: 10,
    borderRadius: 20,
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
  },
  headingText: {
    fontWeight: '700',
    fontSize: 32,
    color: '#505168',
  },
  headingContainer: {
    paddingTop: 25,
  },
});
