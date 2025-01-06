import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color } from '../Global/colors'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setProductosFiltradoPorCategoria } from '../features/shopSlice'

const CardItemCategory = ({item : categoria}) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    return (
            <Pressable style={styles.container} onPress={()=>{
                dispatch(setProductosFiltradoPorCategoria(categoria))
                navigation.navigate("ProductCategory",{categoria})}}>
                <Text style={styles.text}>
                    {categoria}
                </Text>
            </Pressable>
    )
}

export default CardItemCategory

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.primario,
        // alignItems:"flex-start",
        elevation: 9,
        marginHorizontal: 15,
        marginVertical: 10,
        padding: 2,
        alignItems: "center",
    },
    text: {
        fontSize: 15,
        padding: "10",
        fontFamily:"Berkshire"
    }
})