import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import { colors} from '../Global/colors'

const CardProductDetail = ({producto}) => {

    return (
        <View style={styles.container}>
            <Image source={{ uri: producto.imagen }} style={styles.imagen} resizeMode='contain' />
            <Text style={styles.title}>{producto.nombre}</Text>
            <Text style={styles.description}>{producto.descripcion}</Text>
            <Text style={styles.price}>Precio: {producto.precio} $ ARG</Text>
            <Pressable style={styles.boton}>
                <Text style={styles.textBoton}>Agregar al carrito</Text>
            </Pressable>
        </View>
    )
}

export default CardProductDetail

const styles = StyleSheet.create({
    container:{
    },
    imagen:{
    width:50,
    height:50
    },
})