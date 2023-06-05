import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { cartSlice } from '../../store/CartSlice';

export default function Favourite() {

  const jobItems = useSelector((state) => state.job.items);
  const dispatch = useDispatch();

  const renderItem = ({ item }) => {
    return (
      <View style={styles.favouritecontent}>
        <View style={{ marginBottom: 22 }}>
          <Text style={{ fontSize: 25, fontWeight: '500' }}>2 jobs added</Text>
        </View>
        <View style={styles.favborder}>
          <Text style={{ fontSize: 22, fontWeight: '700' }}>{item.job.input}</Text>
          <Text style={{ fontSize: 22, fontWeight: '700' }}>{item.job.location}</Text>
        </View>
        <TouchableOpacity onPress={() => dispatch(cartSlice.actions.removeFromFavourite(item.job.id))}>
          <AntDesign name="delete" size={24} color="black" style={{ position: 'absolute',
           marginLeft: 240, marginTop: -26 }} />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ padding: 22 }}>
      <StatusBar style='auto' />
      <FlatList
        data={jobItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.job.id.toString()}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  favouritecontent: {
    flexDirection: 'column',
    width: '90%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 32
  },
  favborder: {
    borderColor: '#121212',
    borderWidth: 1,
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    position: 'relative'
  }
})
