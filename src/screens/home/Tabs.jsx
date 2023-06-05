import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Search from '../search/Search';
import Message from '../Message/Message';
import Detail from '../Detail/Detail';
import Menu from '../menu/Menu';
import Favourite from '../favourite/Favourite';

const Tab = createBottomTabNavigator()

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: '#FBFBFB',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          shadowColor: 'black',
          shadowOpacity: 0.1,
          shadowRadius: 2,
        }
      }}
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name='home'
        component={Home}
        options={{
          tabBarIcon: (props) => <Entypo name='home' color='#181D31' size={25} />
        }}
      />
      <Tab.Screen
        name='search'
        component={Search}
        options={{
          tabBarIcon: (props) => <FontAwesome name='search' color='#181D31' size={25} />
        }}
      />
      <Tab.Screen
        name='message'
        component={Message}
        options={{
          tabBarIcon: (props) => <AntDesign name='message1' color='#181D31' size={25} />
        }}
      />
      <Tab.Screen
        name='Fav'
        component={Favourite}
        options={{
          tabBarIcon: (props) => <MaterialIcons name='favorite' color='#181D31' size={25} />
        }}
      />
      <Tab.Screen
        name='menu'
        component={Menu}
        options={{
          tabBarIcon: (props) => <Entypo name='menu' color='#181D31' size={25} />
        }}
      />
    </Tab.Navigator>
  )
}

function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={[
              styles.tabButton,
              { backgroundColor: isFocused ? '#FBFBFB' : '#FFFFFF', }
            ]}
          >
            {options.tabBarIcon({ focused: isFocused })}
            <Text style={{ color: isFocused ? '#181D31' : '#AAAAAA',marginBottom:12}}>{label}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    backgroundColor: '#FFFFFF'
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10
  }
})
