import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { auth } from '../../param/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';



export default function Login({navigation}){



  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')


  const login = async()=>{
    try{
      const login = await signInWithEmailAndPassword(auth,email,password)
      navigation.navigate('Home')
    }catch(err){
      console.error(err.message)
      alert('incorrect email or password')
    }

  }

  return (
    <View style={styles.loginContainer}>
      <View style={styles.content}>
        <TextInput placeholder='email address' style={{borderColor:'#181D31',borderWidth:2,padding:12,width:300,
        fontSize:22
      }} value={email} onChangeText={(text)=> setEmail(text)} />
        <TextInput placeholder='password' style={{borderColor:'#181D31',borderWidth:2,padding:12,width:300,
        marginTop:12,fontSize:22
      }} secureTextEntry={true} value={password} onChangeText={(text)=> setPassword(text)} />
      </View>
      <TouchableOpacity style={{backgroundColor:'#181D31',padding:10,width:200,marginTop:20,alignSelf:'center'}} 
      activeOpacity={2} onPress={login} >
       <Text style={{color:'white',textAlign:'center',fontSize:22}}>login</Text>
      </TouchableOpacity>
      <View style={styles.other}>
        <TouchableOpacity style={{borderColor:'#181D31',borderWidth:2,padding:12,width:300,
        fontSize:22,flexDirection:'row',alignItems:'center',gap:20}} activeOpacity={2}>
   <AntDesign name='google' size={24} color='#181D31' />
          <Text>Sign In with Gogle</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{borderColor:'#181D31',borderWidth:2,padding:12,width:300,
        fontSize:22,flexDirection:'row',alignItems:'center',gap:20,marginTop:12}} activeOpacity={2}>
          <AntDesign name='apple1' size={27} color='#181D31' />
          <Text>Sign In with Apple</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  loginContainer:{
    padding:50,
    alignSelf:'center'
  },
  content:{
    width:'100%'
  },
  other:{
    marginTop:50
  }
})