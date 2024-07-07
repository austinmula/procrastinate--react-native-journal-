import React from 'react';
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

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName={'home'}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        options={{headerShown: false}}
        name="home"
        component={HomeStack}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="time"
        component={GoalsScreen}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="list"
        component={TasksScreen}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="calendar"
        component={CalendarScreen}
      />
    </Tab.Navigator>
  );
}

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
        name="Home"
        component={HomeTabs}
      />
    </Drawer.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default App;
