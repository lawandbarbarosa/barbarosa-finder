import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { setInputValue, setLocationValue, AddingJob, setAddRequirePlan, setAddrequire } from '../store/CartSlice';

export default function Adding() {
  const [error, setError] = useState('');

  const handleAdd = () => {
    if (requiring !== '') {
      dispatch(setAddrequire(''));
      dispatch(setAddRequirePlan({ require: requiring }));
    }
  };
  

  const input = useSelector((state) => state.job.input);
  const dispatch = useDispatch();

  const handleInputChange = (text) => {
    dispatch(setInputValue(text));
  };

  const location = useSelector((state) => state.job.location);

  const handleLocation = (text) => {
    dispatch(setLocationValue(text));
  };

  const handleApplyJob = () => {
    dispatch(AddingJob({ input, location }));
  };

  const requiring = useSelector((state) => state.job.require);


  const container = useSelector((state) => state.job.requires);

  const handleRequireText =(text)=>{
    dispatch(setAddrequire(text))
  }

  return (
    <View style={{ padding: 22 }}>
      <View style={styles.container}>
        <TextInput
          placeholder="Job Name"
          placeholderTextColor="#8E909A"
          style={styles.input}
          value={input}
          onChangeText={handleInputChange}
        />
        <TextInput
          placeholder="location"
          placeholderTextColor="#8E909A"
          style={styles.input}
          value={location}
          onChangeText={handleLocation}
        />
      </View>
      <View style={styles.adding}>
        <TextInput
          placeholder="require"
          onChangeText={handleRequireText}
          value={requiring}
          placeholderTextColor="#8E909A"
          style={{ fontSize: 15 }}
        />
        <Pressable style={styles.addButton}>
          <Ionicons name="add" size={24} color="black" onPress={handleAdd} />
        </Pressable>
      </View>
      <View style={styles.requires}>
        {container.map((item, index) => (
          <Text key={index} style={styles.req}>
            # {item.requiring}
          </Text>
        ))}
      </View>
      <View style={{ marginTop: 100 }}>
        <TouchableOpacity style={styles.applyJob} onPress={handleApplyJob}>
          <Text style={styles.JobButton}>Apply Job</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 22,
  },
  input: {
    backgroundColor: '#181D31',
    padding: 12,
    width: '90%',
    color: 'white',
    fontSize: 24,
    margin: 12,
  },
  adding: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#181D31',
    marginTop: 22,
    width: '90%',
    padding: 15,
    height: 75,
    justifyContent: 'space-between',
  },
  addButton: {
    backgroundColor: '#9AE66E',
    padding: 8,
  },
  requires: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
  },
  req: {
    padding: 12,
    marginTop: 12,
    backgroundColor: '#9AE66E',
    marginHorizontal: 12,
  },
  applyJob: {
    backgroundColor: '#319F43',
    padding: 12,
    width: 160,
    alignSelf: 'center',
  },
  JobButton: {
    fontSize: 22,
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
  },
});
