import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import Home from './src/screens/Home'

const Tab = createBottomTabNavigator()

export default function App () {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: 'teal',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: [
              {
                display: 'flex',
              },
              null,
            ],
          }}>
          <Tab.Screen
            options={{
              tabBarIcon: ({focused, color, size}) => (
                <Icon
                  name={focused ? 'home' : 'home-outline'}
                  color={color}
                  size={size}
                />
              ),
            }}
            name='Home'
            component={Home}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({focused, color, size}) => (
                <Icon
                  name={focused ? 'settings' : 'settings-outline'}
                  color={color}
                  size={size}
                />
              ),
            }}
            name='Settings'
            component={Settings}
          />

          <Tab.Screen
            options={{
              tabBarIcon: ({focused, color, size}) => (
                <Icon
                  name={focused ? 'person' : 'person-outline'}
                  color={color}
                  size={size}
                />
              ),
            }}
            name='Profile'
            component={Profile}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

function Settings () {
  return (
    <View style={{flex: 1}}>
      <Text>Settings</Text>
    </View>
  )
}

function Profile () {
  return (
    <View style={{flex: 1}}>
      <Text>Profile</Text>
    </View>
  )
}
