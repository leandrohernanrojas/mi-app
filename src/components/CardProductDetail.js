import { Image, StyleSheet, Text, View } from 'react-native'



const CardProductDetail = ({producto}) => {
   
    return (
        <View style={styles.container}>
            <Image source={{ uri: producto.imagen }} style={styles.imagen} resizeMode='cover' />
            <Text style={styles.text}>{producto.descripcion}</Text>
            <Text style={styles.text}>Stock : {producto.stock}</Text>
            <Text style={styles.text}>Precio: {producto.precio} $ ARG</Text>
        </View>
    )
}

export default CardProductDetail

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        gap:10,
        marginVertical:20
    },
    imagen:{
    width:300,
    height:300,
    borderRadius:10,
    backgroundColor:"blue"
    },
    text:{
        fontSize:20,
        fontFamily:"Besley"
    }
})