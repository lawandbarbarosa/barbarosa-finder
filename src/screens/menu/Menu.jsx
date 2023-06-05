import { StyleSheet, Text, View,SafeAreaView,Image, TouchableOpacity,Alert } from 'react-native'
import React from 'react'
import vadar from "../../../assets/barbarosa.jpg"
import { auth } from '../../param/Firebase'

export default function UserMenu({navigation}) {


  const signOut = () => {
    auth.signOut().then(() => {
      navigation.replace('login');
    });
  };

  return (
    <SafeAreaView style={{padding:22}}>
  <View style={styles.user}>
    <View style={{flexDirection:'row',alignItems:'flex-start',gap:12}}>
    <Image source={vadar} style={{width:100,height:100,borderRadius:50}} />
    <Text style={{marginTop:12,fontSize:22,fontWeight:600}}>lawand barbarosa</Text>
    </View>
    <View style={{marginLeft:110,marginTop:-35}}>
        <Text style={{fontSize:22,fontWeight:400}}>Ui,Ux Designer</Text>
    </View>
  </View>

  <TouchableOpacity style={{marginTop:23,padding:22}} activeOpacity={2} 
  onPress={()=> Alert.alert(
    'are you sure to sign out.?',
    'This action cannot be undone.',
    [
      {
        text:'ok',
        onPress:()=>signOut,
      },
      {
        text:'cancel',
        onPress:()=>console.log('cancel'),
      }
    ]
    ) } >
<Text style={styles.add}>sign Out?</Text>
  </TouchableOpacity>

  <View style={{marginTop:70,marginLeft:32}}>
<TouchableOpacity style={styles.job} onPress={()=> navigation.navigate('Adding') } >
    <Text style={styles.add}>Add Job</Text>
</TouchableOpacity>
</View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
    user:{
        flexDirection:'column',
        padding:30,
        backgroundColor:'#319F43',
        borderRadius:12,
        shadowColor:'#319F43',
        shadowOpacity:5
    },
    job:{
        backgroundColor:'#319F43',
        padding:12,
        width:'40%',
        shadowColor:'#319F43',
        shadowOpacity:5,
        marginLeft:16
    },
    add:{
        fontSize:22,
        color:'#121212',
        fontWeight:600,
        textAlign:'center'
    }
})