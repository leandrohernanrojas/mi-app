import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import Header from '../components/Header'
import { colors} from '../Global/colors'

const ProductDetail = ({producto}) => {


  return (
    <View style={styles.container}>
      <Image source={{uri:producto.imagen}} style={styles.imagen} resizeMode='contain'/>
      <Text style={styles.title}>{producto.nombre}</Text>
      <Text style={styles.description}>{producto.descripcion}</Text>
      <Text style={styles.price}>Precio: {producto.precio} $ ARG</Text>
      <Pressable style={styles.boton}>
        <Text style={styles.textBoton}>Agregar al carrito</Text>
      </Pressable>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  container:{
  },
  imagen:{
    width:100,
    height:100
  }
})