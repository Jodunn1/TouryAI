import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, Image, Button } from 'react-native';
import styles from '@/app/styles'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import audioWave from '@/assets/images/—Pngtree—sound wave vector ilustration in_6341442.png'


const Audiowave = () => {
    return (
        <View style={styles.audioWaveContainer}>
            <Image 
              source={audioWave}
              style={styles.audioWave}
            />
            <View style={styles.audioBackground}></View>
        </View>
    )
}

export default Audiowave