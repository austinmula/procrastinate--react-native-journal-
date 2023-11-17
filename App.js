import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'

import HomeScreen from './src/screens/home/home'
import TasksScreen from './src/screens/home/tasks'
import CalendarScreen from './src/screens/home/calendar'
import GoalsScreen from './src/screens/home/targets'
import TabBar from './src/components/common/TabBar'

const Tab = createBottomTabNavigator()

function HomeTabs () {
  return (
    <Tab.Navigator
      initialRouteName={'home'}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        options={{headerShown: false}}
        name='home'
        component={HomeScreen}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name='calendar'
        component={CalendarScreen}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name='time'
        component={GoalsScreen}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name='list'
        component={TasksScreen}
      />
    </Tab.Navigator>
  )
}

const Stack = createStackNavigator()

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'HomeTabs'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name='HomeTabs' component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
