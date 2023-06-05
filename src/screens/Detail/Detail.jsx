import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import require from './require';
import { useSelector,useDispatch } from 'react-redux';

export default function Detail() {
  const [focused, setFocus] = useState('Description');


  const text = `It is a long established fact that a reader will be
   distracted by the readable content of a page when looking at its 
   layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
   distribution of letters, as opposed to using 'Content here, content here',
    making it look like readable English. Many desktop publishing packages and web 
    page editors now use Lorem Ipsum as their default model text, and a search for 
    'lorem ipsum' will uncover many web sites still in their infancy. Various versions 
    have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`


   const product = useSelector((state)=> state.job.selectedJob)

   const [apply,setApply]=useState(false)

  return (
    <>
     <ScrollView style={{width:'100%',height:'100%',paddingBottom:20}}>
      <View style={styles.header}>
        <Image source={product.image} style={styles.logo} />
        <Text style={styles.jobTitle}>{product.names}</Text>
        <Text style={styles.location}>
          <FontAwesome5 name="location-arrow" size={12} />
          {product.location}
        </Text>
      </View>
      <View style={styles.require}>
        {require.map((req) => (
          <View key={req.id}>
            <Text style={styles.requires}>{req.name}</Text>
          </View>
        ))}
      </View>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
        <TouchableOpacity
        activeOpacity={2}
  style={[
    styles.tabButton,
    { backgroundColor: focused === 'Description' ? '#181D31' : 'white' },
  ]}
  onPress={() => setFocus('Description')}
>
  <Text style={[styles.tabButtonText,{color:focused === 'Description' ? 'white' : '#181D31' }]}>Description</Text>
</TouchableOpacity>
<TouchableOpacity
activeOpacity={2}
  style={[
    styles.tabButton,
    { backgroundColor: focused === 'Company' ? '#181D31' : 'white' },
  ]}
  onPress={() => setFocus('Company')}
>
  <Text style={[styles.tabButtonText,{color: focused === 'Company' ? 'white' : '#181D31' }]}>Company</Text>
</TouchableOpacity>
        </View>
      </View>
      <View style={styles.description}>
   <View style={styles.descriptionHeader}>
   <Text style={{fontSize:15,fontWeight:500}}>Job Title</Text>
   <Text style={{fontSize:15,fontWeight:500,backgroundColor:'#319F43',marginHorizontal:12,padding:7,color:'white'}}>Full Time </Text>
   </View>
   <View style={{borderWidth:1,backgroundColor:'#black',opacity:0.5,width:'90%',marginTop:11}} />
   <Text style={{fontSize:18,color:'#181D31',opacity:0.5,fontWeight:400,marginTop:12,marginVertical:22,
  width:'90%'}}>{text}</Text>
      </View>
    </ScrollView>
    <View style={{backgroundColor:'#181D31',padding:12,height:90,flexDirection:'row',alignItems:'center',
  justifyContent:'center'}}>
 <TouchableOpacity activeOpacity={2}
  style={[styles.jobButton,{opacity: apply ? 0.6 : 1 }]}
  onPress={()=> setApply(!apply)} 
  disabled={apply}
  >
  <Text style={{color:'white',fontSize:19,fontWeight:600}}>{apply ? 'applied' : 'Apply'}</Text>
 </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 270,
    backgroundColor: '#181D31',
    padding: 15,
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 62,
  },
  jobTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
    marginVertical: 10,
  },
  location: {
    color: 'white',
    fontSize: 17,
    opacity: 0.6,
    padding: 12,
  },
  require: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 12,
    gap: 18,
  },
  requires: {
    backgroundColor: '#319F43',
    padding: 10,
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
  },
  content: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  tabButton: {
    backgroundColor: '#181D31',
    padding: 10,
  },
  tabButtonText: {
    color: '#fff',
    fontSize:16,
    fontWeight:600
  },
  description:{
  paddingLeft:20,
  flexDirection:'column',
  alignItems:'flex-start',
  justifyContent:'flex-start'
  },
  descriptionHeader:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:4
  },
  jobButton:{
backgroundColor:'#319F43',
    padding:7,
    height:40,
    marginBottom:12
  }
});
