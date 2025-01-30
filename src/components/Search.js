import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { color } from '../Global/colors';
import { useState } from 'react';


const Search = ({filtroPorPalabraClave,onChangeKeyword}) => {
    const [textInput, setTextInput] = useState("")
    const [error,setError] = useState("")
    const search = () => {
        const regex = /^[0-9*_+\-.!@#$%^&+$]/
        if(regex.test(textInput)){
            return setError("Caracter no valido")
        }
        setError("")
        onChangeKeyword(textInput)
    }

    const removeSearch = () => {
        onChangeKeyword("")
        setTextInput("")
        setError("")
    }


    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <TextInput 
                placeholder='Buscar'
                style={styles.textinput}
                value={textInput}
                onChangeText={(text)=> setTextInput(text)}
                />
                <Pressable onPress={search}>
                    <FontAwesome name="search" size={24} color="black" />
                </Pressable>
                <Pressable onPress={removeSearch}>
                    <AntDesign name="closecircle" size={24} color="black" />
                </Pressable>
            </View>
            <Text style={styles.error}>{error ? error : ""}</Text>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    search: {
        flexDirection: "row",
        backgroundColor: color.primario,
        borderRadius: 6,
        alignItems: "center",
        padding: 2,
        paddingRight: 10,
        gap: 15
    },
    textinput: {
        flex: 1
    },
    error:{
        color:"red"
    }

})