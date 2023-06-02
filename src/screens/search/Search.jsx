import { StyleSheet, Text, View,SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import HomeContent from '../../components/HomeContent'

export default function Search() {
  return (
    <SafeAreaView style={{padding:12,marginTop:100}}>
      <ScrollView>
   <HomeContent />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})