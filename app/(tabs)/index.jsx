"use client"
import { View, ImageBackground } from 'react-native';
import React from 'react'
import styles from '@/app/styles';
import Buttons from '@/app/ButtonIcons'
import Navbar from '@/app/NavBar'
import Audiowave from '@/app/AudioWave';



const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://maps.googleapis.com/maps/api/staticmap?center=New+York,NY&zoom=12&size=600x1200&maptype=roadmap&key=AIzaSyAhUQoj6eONF7joyCYMC_YJW9QlyKwF9CQ',
        }}
        style={styles.image}
      >
      <View style={styles.input}>
        <Navbar />
        <Buttons />
        <Audiowave />
      </View>
      </ImageBackground>
    </View>
  );
};

export default App;


