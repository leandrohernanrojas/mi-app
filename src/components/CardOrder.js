import { StyleSheet, Text, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { color } from '../Global/colors';


const CardOrder = ({ order }) => {
    const fecha = new Date (order.createdAt).toLocaleString()
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.text}>{fecha}</Text>
                <Text style={styles.text}>Total : {order.total} $ ARG</Text>
            </View>
            <FontAwesome style={styles.serch} name="search" size={28} color="black" />
        </View>
    )
}

export default CardOrder

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:color.card,
        margin:10,
        borderRadius:5,
        alignItems:"center",
        justifyContent:"space-between",
        padding:10
    },
    content:{
    gap:5
    },
    text:{
        fontFamily:"Nunito",
        fontSize:15
    }
})