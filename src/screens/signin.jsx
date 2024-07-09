import {useContext, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Surface, TextInput} from 'react-native-paper';
import {AuthContext} from '../context/AuthContext';

export default function SignInScreen({navigation}) {
  const {login, isLoading, } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    login({email: username, password});
  };
  function goToSignUp() {
    navigation.navigate('signup');
  }
  return (
    <View style={styles.mainContainer}>
      <Surface style={styles.surface} elevation={1}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Sign In</Text>
          <Text style={{marginTop: 10}}>
            Please enter username and password to login
          </Text>
        </View>
        <TextInput
          label="Username or Email"
          value={username}
          onChangeText={text => setUsername(text)}
          mode="outlined"
          left={<TextInput.Icon icon="account" />}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
          mode="outlined"
          right={<TextInput.Icon icon="eye" />}
          left={<TextInput.Icon icon="lock" />}
        />

        <Button buttonColor="#505168" mode="contained" onPress={signIn}>
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
    backgroundColor: '#eaefd3',
  },
  surface: {
    padding: 20,
    width: '90%',
    gap: 20,
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
