import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 0,
      padding: 0
    },
    image: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      resizeMode: 'cover',
      width: '100%',
      margin: 0,
      padding: 0
      },
    text: {
      color: 'white',
      fontSize: 15,
      fontWeight: 'normal',
      textAlign: 'center',
      borderRadius: 30,
      width: '50%',
      outlineStyle: 'none'
    },
    input: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: '10%',
      width: '100%',
    },
    navContainer: {
      backgroundColor: 'rgb(28 85 109)',
      padding: 4,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '70%',
      borderRadius: 30,
      opacity: 0.85,
    },
    buttonsContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      width: '100%',
      height: '35%',
      bottom: 0,
      padding: 13,
      marginTop: '70%'
    },
    button: {
      backgroundColor: 'white',
      borderRadius: 100,
      padding: 10
    },
    microphone: {
      backgroundColor: 'white',
      borderRadius: 100,
      padding: 10,
      paddingLeft: 13,
      paddingRight: 13
    },
    audioWave: {
      width: '80%',
      height: '30%',
      zIndex: 2
    },
    audioWaveContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '100%',
      marginBottom: 30
    },
    audioBackground: {
      backgroundColor: 'rgb(28 85 109)',
      width: '80%',
      height: '50%',
      position: 'absolute',
      top: 95,
      borderRadius: 100,
      zIndex: 1
    }
  });

  export default styles