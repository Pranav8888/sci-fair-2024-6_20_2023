import { SafeAreaView, TouchableOpacity, View, Text, Image } from "react-native";
import { Stack, useRouter } from 'expo-router'
import { icons, images } from '../constants'
import { ScreenHeaderBtn } from '../components'
import React from 'react';
import ProfileScreenOwner from "./ProfileScreenOwner";
const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen 
        options={{
          headerStyle: { backgroundColor: 'e8e6e6'},
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension={40}/>
          ),
          headerRight: () => (
            <ScreenHeaderBtn  iconUrl={images.profile} dimension={40} /> 
          ),
          headerTitle: 'APP'
        }}
      />
      <ProfileScreenOwner />
    </SafeAreaView>
  )
} 



export default Home;