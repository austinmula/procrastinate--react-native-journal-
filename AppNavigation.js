import React, {useContext} from 'react';
import {AuthContext} from './src/context/AuthContext';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './src/screens/home/home';
import TasksScreen from './src/screens/home/tasks';
import CalendarScreen from './src/screens/home/calendar';
import GoalsScreen from './src/screens/home/targets';
import TabBar from './src/components/common/TabBar';
import {createDrawerNavigator} from '@react-navigation/drawer';
import variables from './src/utils/variables/colors';
import CreateJournalEntry from './src/screens/home/homestack/createJournalEntry';
import SignInScreen from './src/screens/signin';
import SignUpScreen from './src/screens/signup';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="home">
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="createEntry"
      options={{headerShown: false}}
      component={CreateJournalEntry}
    />
  </Stack.Navigator>
);

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="signin">
      <Stack.Screen
        name="signin"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signup"
        options={{headerShown: false}}
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: variables.colors.lighterBg,
        },
        headerTintColor: variables.colors.darkbg,
        // drawerType: 'front',
        // drawerPosition: 'right',
      }}>
      <Drawer.Screen
        options={{
          // headerTransparent: true,
          headerTitle: '',
          headerStyle: {
            backgroundColor: variables.colors.lightBg,
          },
        }}
        name="home"
        component={HomeStack}
      />
    </Drawer.Navigator>
  );
};

export default function AppNavigation() {
  const {userToken, isLoading} = useContext(AuthContext);
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {userToken === null ? <AuthStack /> : <DrawerNavigator />}
    </NavigationContainer>
  );
}
