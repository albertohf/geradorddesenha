import { StyleSheet, View, SafeAreaView, FlatList } from 'react-native';
import useStorage from '../hooks/useStorage';
import { useIsFocused } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import PasswordItem from '../components/PasswordItem';


export default function ArchiveItens() {
  const { getItem, removeItem } = useStorage();
  const [listPasswords, setListPasswords] = useState([])
  const isFocused = useIsFocused();

  async function handleDeletePass(item) {
    const pass = await removeItem('@pass', item);

    setListPasswords(pass);
  }


  useEffect(() => {
   async function loadPasswords() {
    const passwords = await getItem('@pass');
    setListPasswords(passwords);
   }
   loadPasswords();
  }, [isFocused])
  


  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.content}>
        <FlatList
          style={{flex:1, paddingTop: 14}}
          data={listPasswords}
          renderItem={({item}) =>
            <PasswordItem
              data={item}
              removePass={() => handleDeletePass(item)}
            />
          }
          keyExtractor={item => item}
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  }
})