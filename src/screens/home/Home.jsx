import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Tabs from './Tabs'
import Header from '../../components/Header'
import HomeContent from '../../components/HomeContent'



export default function Home() {
  return (
    <>
     <ScrollView style={{width:'100%',height:'100%'}}>
      <Header />
      <HomeContent />
    </ScrollView>
    </>
   
  )
}

const styles = StyleSheet.create({})