import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider'
import { useState } from 'react';


export default function Home() {
    const [value, setValue] = useState(6);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <Text style={styles.title}>{value} Caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ width: '100%' }}
          minimumValue={6}
          maximumValue={20}
          minimumTrackTintColor="#00ff00"
          maximumTrackTintColor="#000000"
          thumbTintColor='#00ff'
        />
      </View>

      <TouchableOpacity style={styles.button} opacity={.7}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#00ff00',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  title: {
    fontSize: 35,
    color: '#00ff',
  },
  logo: {
    marginBottom: 60,
  }, 
  area: {
    marginBottom: 14,
    marginTop: 20,
    width: '80%',
    padding: 12,
  }
});
