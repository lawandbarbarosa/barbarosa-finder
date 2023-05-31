import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
export default function Board({navigation}) {
  return (
    <SafeAreaView style={{width:'100%'}}>
      <View style={styles.header}>
      <Text style={{fontSize:20,fontWeight:700,color:'#181D31'}}>Barbarosa Finder</Text>
      </View>
      <View style={styles.content}>
       <View style={styles.one}>
        <AntDesign name='apple1' color='white' size={30} />
        <View style={{flexDirection:'column',alignItems:'center',alignSelf:'center',marginTop:32}}>
        <Text style={{fontSize:18,color:'white',fontWeight:600}}>apple is hiring</Text>
        <Text style={{fontSize:13,color:'white',marginTop:30}} numberOfLines={1}>Software Engeneering</Text>
        </View>
       </View>
       <View style={styles.two}>
       <AntDesign name='google' color='white' size={30} />
        <View style={{flexDirection:'column',alignItems:'center',alignSelf:'center',marginTop:32}}>
        <Text style={{fontSize:15,color:'white',fontWeight:600}}>google is hiring</Text>
        <Text style={{fontSize:15,color:'white',marginTop:30}} numberOfLines={1}>Front-en Developer</Text>
        </View>
       </View>
       <View style={styles.three}>
       <Entypo name='spotify' color='white' size={30} />
        <View style={{flexDirection:'column',alignItems:'center',alignSelf:'center',marginTop:32}}>
        <Text style={{fontSize:15,color:'white',fontWeight:600}}>spotify is hiring</Text>
        <Text style={{fontSize:15,color:'white',marginTop:20}} numberOfLines={1}>Front-en Developer</Text>
        </View>
       </View>
       <View style={styles.four}>
       <FontAwesome5 name='microsoft' color='white' size={30} />
        <View style={{flexDirection:'column',alignItems:'center',alignSelf:'center',marginTop:27}}>
        <Text style={{fontSize:15,color:'white',fontWeight:600}} numberOfLines={1} >microsoft is hiring</Text>
        <Text style={{fontSize:15,color:'white',marginTop:30}} numberOfLines={1}>Front-en Developer</Text>
        </View>
       </View>
      </View>

      <View style={styles.footer}>
       <Text numberOfLines={3} style={{fontSize:32,fontWeight:500,}} >A virtual
        marketplace where talent is traded.</Text>
        <TouchableOpacity style={{flexDirection:'row',position:'relative'}}
         onPress={()=> navigation.navigate('register') } >
          <View  style={styles.goooo}>
          <Text style={{color:'white',fontSize:28,fontWeight:800}}>Get Started</Text>
          </View>
        <AntDesign name='arrowright' color='white' size={35}
         style={{backgroundColor:'#181D31',position:'absolute',right:0,bottom:0,height:'63%',width:70,
         padding:17}} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header:{
    alignSelf:'center',
  },
  content:{
    flexDirection:'row',
    padding:14,
    marginTop:40,
    flexWrap:'wrap',
    width:'100%'
  },
  one:{
    backgroundColor:'#181D31',
    width:160,
 padding:12,
 height:170
  },
  two:{
    backgroundColor:'#181D31',
    width:160,
 padding:12,
 height:170,
 marginHorizontal:7
  },

  three:{
    backgroundColor:'#181D31',
    width:150,
 padding:12,
 height:170,
 marginTop:17
  },

  four:{
    backgroundColor:'#181D31',
    width:160,
 padding:12,
 height:170,
 marginTop:17,
 marginHorizontal:7
  },
  
  footer:{
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    marginTop:1,
    padding:22,
    color:'#181D31'
  },
  goooo:{
    flexDirection:'row',
    alignItems:'center',
    gap:12,
    marginTop:39,
    padding:15,
    backgroundColor:'#678983',
    width:'90%',
    position:'relative'
  }

})