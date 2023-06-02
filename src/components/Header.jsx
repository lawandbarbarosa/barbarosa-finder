import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import barbarosa from "../../assets/barbarosa.jpg"

export default function Header() {
  return (
    <SafeAreaView>
      <View style={{padding:26,flexDirection:'row',alignItems:'center'}}> 
      <Image source={barbarosa} style={{borderRadius:20}}/>
      <View style={{flexDirection:'row',gap:5,marginHorizontal:12}}>
      <Text style={{fontSize:20,fontWeight:400,color:'181D31'}}>Hi</Text>
      <Text style={{fontSize:20,fontWeight:800,color:'181D31'}}>Lawand Barbarosa</Text>
      </View>
    </View>
    <View style={styles.headerContent}> 
      <Text style={styles.headeText} numberOfLines={2} >Let’s Find Your Dream Job</Text>
    </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
    headerContent:{
        flexDirection:'column',
        alignItems:'flex-start',
        marginTop:30,
        paddingLeft:26,
        width:'90%'
    },
    headeText:{
        fontSize:40,
        fontWeight:600,
    }
})