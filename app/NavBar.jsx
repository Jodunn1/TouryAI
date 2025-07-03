import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, Image, Button } from 'react-native';
import styles from '@/app/styles'
import Ionicons from '@expo/vector-icons/Ionicons';

const Navbar = () => {
    return (
          <View style={styles.navContainer}>
            <Ionicons name="menu" size={18} color="white" />
            <TextInput placeholder="Ask me anything" style={styles.text} placeholderTextColor="white" />
            <Ionicons name="search" size={18} color="white" />
          </View>
    )
}

export default Navbar