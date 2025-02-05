import { StyleSheet, Text, View, TextInput } from 'react-native'
import { color } from '../Global/colors'



const InputForm = ({ label, value, onChangeText, isSecure, error }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{label}</Text>
            <TextInput value={value} onChangeText={onChangeText} style={styles.input} secureTextEntry={isSecure} />
            <View style={styles.error}>{error ? <Text style={styles.error}>{error}</Text> : ""}</View>
        </View>
    )
}

export default InputForm

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 10,
    },
    text: {
        fontSize: 16,
        fontFamily: "Nunito"
    },
    input: {
        fontSize: 14,
        borderBottomWidth: 1,
        borderBottomColor: color.primario,
    },
    error:{
        color:"red",
        fontSize:12,
        height:20
    }

})