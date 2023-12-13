import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import useStorage from '../hooks/useStorage';


export default function ModalContent({pass, handleClose}) {
  const { setItem } = useStorage();

  async function handleCopyPass() {
    await Clipboard.setStringAsync(pass);
    alert('Senha copiada com sucesso!');

    await setItem('@pass', pass);
    handleClose();
  }


  return (
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
        <Text style={styles.title}>segure na senha para salva-la</Text>
        <TouchableOpacity style={styles.newPass} onLongPress={handleCopyPass}>
          <Text style={styles.modalText}>{pass}</Text>
        </TouchableOpacity>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={handleClose}>
          <Text style={styles.textStyle}>Fechar Modal</Text>
        </Pressable>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
    title: {
      marginBottom: 15,
      fontSize: 16,
      fontWeight: 'bold'
    },
    newPass: {
      backgroundColor: '#00ff00',
      padding: 15,
      marginBottom: 15,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 1,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    textStyle: {
      color: 'white',
      padding: 3
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(24,24,24,0.5)',
      },
    modalText: {
        textAlign: 'center',
        color: '#000',
        fontSize: 20,
      },
    modalView: {
        width: '80%',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
      },
    buttonClose: {
        backgroundColor: '#00ff',
      },
});
