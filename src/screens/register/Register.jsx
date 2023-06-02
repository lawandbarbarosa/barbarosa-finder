import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Login from './Login'
import SignUp from './SignUp'
const Tabss = createMaterialTopTabNavigator()

export default function Register() {
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <View style={{alignSelf:'center',justifyContent:'center',marginTop:50}}>
     <Text style={{color:'#181D31',fontSize:20,fontWeight:500}}>Barbarosa Finder</Text>
      </View>
<Tabss.Navigator screenOptions={{tabBarActiveTintColor:'#181D31',
tabBarIndicatorStyle:{
backgroundColor:'white',borderBottomWidth:2
},tabBarLabelStyle:{fontSize:15,fontWeight:700},tabBarStyle:{
  marginTop:80,
}}} >
      <Tabss.Screen name='login' component={Login} />
      <Tabss.Screen name='sign Up' component={SignUp} />
    </Tabss.Navigator>
    </View>

  )
}

const styles = StyleSheet.create({})