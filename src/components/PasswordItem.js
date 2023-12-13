import { Text, StyleSheet, Pressable } from "react-native";


export default function PasswordItem({data, removePass}) {
    return (
        <Pressable
            style={styles.container}
            onLongPress={removePass}>
            <Text style={styles.text}>{data}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00ff00',
        padding: 10,
        width: '100%', 
        marginTop: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: '#000',
    },
})