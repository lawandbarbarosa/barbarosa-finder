import { FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, View,Image } from 'react-native'
import React,{useState} from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


import google from "../../assets/google.png"
import spotify from "../../assets/spotify.png"
const data = [
  {id:1,name:'All'},
  {id:2,name:'Ui,Ux Designer'},
  {id:3,name:'Front-end Developer'},
  {id:4,name:'Back-end Developer'},
  {id:5,name:'Graphic Designer'},
  {id:6,name:'Architecture'},
]


import { Fontisto } from '@expo/vector-icons';

const JobData = [
  {id:1,names:"Front-end Developer",
  location:'Sulaymaniyah,Kurdistan',company:'Google',image:google},
  {id:2,names:"Graphic Designer",location:'Duhok,Kurdistan',company:'Spotify',image:spotify},
]

export default function HomeContent() {

  const [focused,setFocused]=useState('All')
  const [searchQuery,setSearchQuery]=useState('')

  const renderItem = ({ item }) => {
    return (
      <>
        {JobData.map((job) => {
          const { id, names, location, company,image } = job;
          if ((focused === 'All' || focused === names) && searchQuery === '' 
          ||names.toLowerCase().includes(searchQuery.toLowerCase()))  return (
            <View key={id} style={styles.jobBorder}>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <View style={{padding:3,backgroundColor:'#181D31',position:'absolute',width:50}}>
              <Image source={image} style={{width:40,height:40,padding:15}} />
              </View>
              <Text style={{marginLeft:70,padding:5,fontSize:18,fontWeight:600}}>{names}</Text>
              <Entypo name="dots-three-vertical" size={24} color="#181D31" style={{marginTop:6,opacity:0.5}} />
              </View>
              <View style={styles.footer}>
              <Text style={{fontSize:16,fontWeight:600,color:'#181D31'}}>{company}</Text>
              <Text> <FontAwesome5 name="location-arrow" size={15} color="#181D31"
               style={{opacity:0.5}} /> {location}</Text>
              <Fontisto name="favorite" size={24} color="#181D31" />
              </View>
            </View>
          );
        })}
      </>
    );
  };
  

  return (
    <View style={{paddingLeft:26}}>
      <View style={styles.contentsearch}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <FontAwesome name='search' color='#181D31' size={28} />
        <TextInput
         placeholder='search' style={{fontSize:20,padding:12}}
         value={searchQuery}
         onChangeText={setSearchQuery}
         />
        </View>
      <MaterialIcons name='category' color='#181D31' size={28} style={{paddingHorizontal:12}}  />
      </View>
     <ScrollView horizontal style={styles.category}>
      {data.map((items)=>{
        const {name,id}=items
        return(
          <Pressable key={id} 
          style={[styles.categories,{backgroundColor: focused  ===  name ? '#181D31' : '#fff',}]} 
           onPress={()=> setFocused(name)} >
           <Text style={[styles.cat,{color:focused === name ? '#fff' : '#181D31'}]}>{name}</Text>
          </Pressable>
        )
      })}
     </ScrollView>
     <View style={styles.contentContainer}>
     <Text style={{fontSize:26,fontWeight:700,color:'#181D31'}}>Recently Added</Text>
     <FlatList
     data={JobData}
     renderItem={renderItem}
     keyExtractor={item => item.id}
     />
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contentsearch:{
    width:'88%',
    borderWidth:2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:5
  },
  category:{

  },
  categories:{
    padding:6,
    borderWidth:2,
    marginHorizontal:7,
    marginTop:18,
  },
  cat:{
    fontSize:22,
  },
  contentContainer:{
    marginTop:20
  },
  jobBorder:{
    borderWidth:2,
    borderColor:'#181D31',
    width:'90%',
    marginVertical:12,
    position:'relative',
    height:90,
    flexDirection:'column'
  },
  footer:{
    flexDirection:'row',
    padding:12,
    justifyContent:"space-between",
    alignItems:'center',
    marginTop:8
  }
})