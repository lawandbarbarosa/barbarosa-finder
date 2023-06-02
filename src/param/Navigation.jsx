import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/home/Home'
import Board from '../screens/OnBoarding/Board'
import Register from '../screens/register/Register'
import Tabs from '../screens/home/Tabs'

const Stack = createNativeStackNavigator()

export default function Navigation() {
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home' >
        <Stack.Screen name='board' component={Board} />
        <Stack.Screen name='register' component={Register} />
        <Stack.Screen name='Home' component={Tabs} />
     </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})