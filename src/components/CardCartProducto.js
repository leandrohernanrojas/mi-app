import { Pressable, StyleSheet, Text, View } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {color} from "../Global/colors"
import { fonts } from '../Global/fonts';

const CardCartProducto = ({ producto }) => {
    return (
        <View style={styles.container}>
            <View style={styles.contentText}>
                <Text style={styles.nombre}>{producto.nombre}</Text>
                <Text style={styles.text}>Categoria : {producto.categoria}</Text>
                <Text style={styles.text}>Precio : {producto.precio} $ ARG</Text>
                <Text style={styles.text}>Cantidad:1</Text>
            </View>
            <View style={styles.button}>
                <Pressable><Text style={styles.buttonText}>+</Text>
                </Pressable>
                <Pressable><Text style={styles.buttonText}>-</Text>
                </Pressable>
                <MaterialIcons name="restore-from-trash" size={24} color="black" />
            </View>
        </View>
    )
}

export default CardCartProducto

const styles = StyleSheet.create({
    container:{
        backgroundColor:color.card,
        margin:10,
        borderRadius:10,
        padding:10,
    },
    contentText:{
        
    },
    nombre:{
        fontSize:20,
        fontFamily:"Berkshire"
    },
    text:{
        height:24,
        fontFamily:"Besley",
        textShadowRadius:2,
    },
    button:{
        flexDirection:"row",
        gap:20,
        alignItems:"center"
    },
    buttonText:{
        fontSize:20,
        // backgroundColor:"red",
        paddingInline:6
    }


})