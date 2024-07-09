import {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Snackbar, Surface, TextInput} from 'react-native-paper';
import {AuthContext} from '../context/AuthContext';

export default function SignUpScreen({navigation}) {
  const {registeruser, isLoading, error} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (error) {
      setVisible(true);
    }
  }, [error]);
  const register = () => {
    if (username && password && email) {
      registeruser({email, username, password});
    }
  };
  function goToSignIn() {
    navigation.navigate('signin');
  }

  const onDismissSnackBar = () => setVisible(false);

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
          value={username}
          onChangeText={text => setUsername(text)}
          mode="outlined"
          left={<TextInput.Icon icon="account" />}
        />
        <TextInput
          label="Email Address"
          value={email}
          onChangeText={text => setEmail(text)}
          mode="outlined"
          left={<TextInput.Icon icon="email" />}
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
        <TextInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          secureTextEntry
          mode="outlined"
          right={<TextInput.Icon icon="eye" />}
          left={<TextInput.Icon icon="lock" />}
        />

        <Button
          loading={isLoading}
          disabled={password !== confirmPassword}
          buttonColor="#505168"
          mode="contained"
          onPress={register}>
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
      <Snackbar onDismiss={onDismissSnackBar} visible={visible} duration={3000}>
        {error}
      </Snackbar>
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
