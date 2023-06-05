import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/home/Home'
import Board from '../screens/OnBoarding/Board'
import Register from '../screens/register/Register'
import Tabs from '../screens/home/Tabs'
import Detail from '../screens/Detail/Detail'
import Menu from '../screens/menu/Menu'
import Adding from '../components/Adding'
import Favourite from '../screens/favourite/Favourite'
const Stack = createNativeStackNavigator()
export default function Navigation() {
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home' >
        <Stack.Screen name='board' component={Board} />
        <Stack.Screen name='register' component={Register} />
        <Stack.Screen name='Home' component={Tabs} />
        <Stack.Screen name='Adding' component={Adding} options={{presentation:'modal'}} />
        <Stack.Screen name='menu' component={Menu} />
        <Stack.Screen name='Fav' component={Favourite} />
        <Stack.Screen name='Detail' component={Detail} options={{presentation:'modal'}} />
     </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})