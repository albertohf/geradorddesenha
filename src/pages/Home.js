import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import Slider from '@react-native-community/slider'
import { useState } from 'react';
import ModalContent from '../components/ModalContent';


export default function Home() {
    const [size, setSize] = useState(6);
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()_+-=[]{}|;:,.<>?';

    function handleGeneratePass() {
        let pass = '';
        for (let i = 0; i < size; i++) {
            pass += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setPassword(pass);
        setModalVisible(true);
    }


  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ width: '100%' }}
          minimumValue={6}
          maximumValue={20}
          minimumTrackTintColor="#00ff00"
          maximumTrackTintColor="#000000"
          thumbTintColor='#00ff'
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.button} opacity={.7} onPress={handleGeneratePass}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
            <ModalContent pass={password} handleClose={() => setModalVisible(false)}/>
      </Modal>
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
