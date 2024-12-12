import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color } from '../Global/colors'

const CardItemCategory = ({item}) => {
    return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {item}
                </Text>
            </View>
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
        padding: "10"
    }
})