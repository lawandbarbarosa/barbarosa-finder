import { FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Job from '../screens/home/Job';
import { useSelector, useDispatch } from 'react-redux';
import { cartSlice } from '../store/CartSlice';
const data = [
  { id: 1, name: 'All' },
  { id: 2, name: 'Ui,Ux Designer' },
  { id: 3, name: 'Front-end Developer' },
  { id: 4, name: 'Back-end Developer' },
  { id: 5, name: 'Graphic Designer' },
  { id: 6, name: 'Architecture' },
];

import { Fontisto } from '@expo/vector-icons';



export default function HomeContent({ navigation }) {
  const [focused, setFocused] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [focusFavourite, setFocusFavourite] = useState(false);

  const jobs = useSelector((state) => state.job.JobDetail);
  const dispatch = useDispatch();

  const addtoCart = () => {
    dispatch(cartSlice.actions.addToCart());
  };

  const renderItem = ({ item }) => {
    return (
      <>
        {jobs.map((job) => {
          const { id, names, location, company, image, input } = job;
          if (
            (focused === 'All' || focused === input) &&
            (searchQuery === '' || input.toLowerCase().includes(searchQuery.toLowerCase()))
          )
            return (
              <TouchableOpacity
                key={id}
                style={styles.jobBorder}
                activeOpacity={2}
                onPress={() => {
                  dispatch(cartSlice.actions.setSelectedJob(item.id));
                  navigation.navigate('Detail');
                }}
              >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ padding: 3, backgroundColor: '#181D31', position: 'absolute', width: 50 }}>
                    <Image source={image} style={{ width: 40, height: 40, padding: 15 }} />
                  </View>
                  <Text style={{ marginLeft: 70, padding: 5, fontSize: 18, fontWeight: '600' }}>{input}</Text>
                  <Entypo name="dots-three-vertical" size={24} color="#181D31" style={{ marginTop: 6, opacity: 0.5 }} />
                </View>
                <View style={styles.footer}>
                  <Text style={{ fontSize: 16, fontWeight: '600', color: '#181D31' }}>{company}</Text>
                  <Text>
                    <FontAwesome5 name="location-arrow" size={15} color="#181D31" style={{ opacity: 0.5 }} />
                    {location}
                  </Text>
                  <Fontisto
                    name="favorite"
                    size={24}
                    color={focusFavourite ? 'green' : '#181D31'}
                    onPress={() => {
                      setFocusFavourite(!focusFavourite);
                      addtoCart();
                    }}
                  />
                </View>
              </TouchableOpacity>
            );
        })}
      </>
    );
  };

  return (
    <View style={{ paddingLeft: 26 }}>
      <View style={styles.contentsearch}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FontAwesome name="search" color="#181D31" size={28} />
          <TextInput
            placeholder="search"
            style={{ fontSize: 20, padding: 12 }}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <MaterialIcons name="category" color="#181D31" size={28} style={{ paddingHorizontal: 12 }} />
      </View>
      <ScrollView horizontal style={styles.category}>
        {data.map((items) => {
          const { name, id } = items;
          return (
            <Pressable
              key={id}
              style={[
                styles.categories,
                { backgroundColor: focused === name ? '#181D31' : '#fff' },
              ]}
              onPress={() => setFocused(name)}
            >
              <Text style={[styles.cat, { color: focused === name ? '#fff' : '#181D31' }]}>{name}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
      <View style={styles.contentContainer}>
        <Text style={{ fontSize: 26, fontWeight: '700', color: '#181D31' }}>Recently Added</Text>
        <FlatList data={jobs} renderItem={renderItem} keyExtractor={(item) => item.id} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentsearch: {
    width: '88%',
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
  category: {},
  categories: {
    padding: 6,
    borderWidth: 2,
    marginHorizontal: 7,
    marginTop: 18,
  },
  cat: {
    fontSize: 22,
  },
  contentContainer: {
    marginTop: 20,
  },
  jobBorder: {
    borderWidth: 2,
    borderColor: '#181D31',
    width: '90%',
    marginVertical: 12,
    position: 'relative',
    height: 90,
    flexDirection: 'column',
  },
  footer: {
    flexDirection: 'row',
    padding: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
});
