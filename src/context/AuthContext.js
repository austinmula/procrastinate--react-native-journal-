import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {apiClient} from '../hooks/useApi';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [error, setError] = useState(null);

  const login = data => {
    setIsLoading(true);
    console.log(data);
    loginuser(data);
  };

  const loginuser = async data => {
    try {
      const result = await apiClient.post('/users/login', data);
      console.log(result.data);
      if (result.data) {
        setUserToken(result.data.token);
        AsyncStorage.setItem('userToken', result.data.token);
        // setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setError('error occured while logging you in');
    } finally {
      setIsLoading(false);
    }
  };

  const registeruser = async (data) => {
    try {
      const result = await apiClient.post('/users/signup', data);
      if (result.data) {
        setUserToken(result.data.token);
        AsyncStorage.setItem('userToken', result.data.token);
        // setIsLoading(false);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem('userToken');
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem('userToken');
      setUserToken(userToken);
      setIsLoading(false);
    } catch (error) {
      Alert.alert('Oops something went wrong');
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{login, logout, isLoading, userToken, error, registeruser}}>
      {children}
    </AuthContext.Provider>
  );
};
