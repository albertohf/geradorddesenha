import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
    //buscar item
    const getItem = async (key) => {
        try {
            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords);
        } catch (error) {
            console.log('error ao buscar item!', error)
            return []
        }
    }
    //salvar item
    const setItem = async (key, value) => {
       try {
        let data = await AsyncStorage.getItem(key);
        data = JSON.parse(data) || []; //caso o item não exista, retorna um array vazio.
        data.push(value);

        await AsyncStorage.setItem(key, JSON.stringify(data));

       } catch (error) {
        console.log('erro ao salvar item', error)
       }
    }
    //remover item
    const removeItem = async (key, item) => {
        try {
            let data = await AsyncStorage.getItem(key);

            let myPasswords = JSON.parse(data).filter(pass => pass !== item);

            await AsyncStorage.setItem(key, JSON.stringify(myPasswords));
            return myPasswords
        } catch (error) {
            console.log('error ao remover item', error)
        }
    }

    return {
        getItem,
        setItem,
        removeItem,
    }
}

export default useStorage;