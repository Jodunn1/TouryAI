import React, {useState} from 'react';
import { View } from 'react-native';
import styles from '@/app/styles'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Snackbar, Button} from 'react-native-paper';


const Buttons = () => {
  const [visible, setVisible] = React.useState(false);
  const [isPlaying, setIsPlaying] = useState(false)
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  const ShowSnackbar = () => {
    return (
        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          action={{
            label: 'Undo',
            onPress: () => {
              // Do something
            },
          }}
        >
          You clicked a button!
        </Snackbar>
    )
  }

  const handlePress = () => {
    setIsPlaying(prev => !prev)
  }


    return (
      <View style={styles.buttonsContainer}>
        <FontAwesome
          style={styles.microphone}
          name="microphone"
          size={20}
          color="black"
          onPress={onToggleSnackBar}
        />

        <Ionicons
          style={styles.button}
          name="language"
          size={20}
          color="black"
          onPress={onToggleSnackBar}
        />

        <Ionicons style={styles.button} 
        name={isPlaying ? 'pause' : 'play'}
        size={20} 
        color="black" 
        onPress={handlePress}
        />

        <Ionicons
          style={styles.button}
          name="settings-outline"
          size={20}
          color="black"
          onPress={onToggleSnackBar}
        />

        <ShowSnackbar />
      </View>
    );
}

export default Buttons
