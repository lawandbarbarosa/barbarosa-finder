import { StyleSheet, Text, View,Image, SafeAreaView } from 'react-native'
import React from 'react'

import bar from "../../../assets/barbarosa.jpg"
import uruj from "../../../assets/animation.jpeg"

export default function Message() {





  return (
    <SafeAreaView>
    <View style={{padding:22,flexDirection:'column'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',}}>
            <View style={{flexDirection:'row',gap:12}}>
            <Image source={bar} style={{width:50,height:50,borderRadius:100}} />
      <Text style={{fontSize:15,fontWeight:600,color:'#181D31'}}>Lawand Babarosa</Text>
            </View>
      <View>
        <Text style={{color:'#181D31'}}>30/5/2023</Text>
      </View>
        </View>
        <Text style={{marginLeft:62,color:'#181D31',opacity:0.5,marginTop:-12}}>this work exended to you</Text>
    </View>
    </SafeAreaView>
   
  )
}




const styles = StyleSheet.create({})