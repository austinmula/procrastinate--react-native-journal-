import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {GestureHandlerRootView} from 'react-native-gesture-handler'

const Tab = createBottomTabNavigator()

export default function App () {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline'
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline'
              }

              return <Icon name={iconName} size={size} color={color} />
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',

            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name='Home' component={Home} />

          <Tab.Screen name='Settings' component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

function Home () {
  return (
    <View style={{flex: 1}}>
      <Text>Home</Text>
    </View>
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
