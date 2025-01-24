import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { usePostCartMutation } from '../seervices/cart'
import { useSelector } from 'react-redux'
import CardProductDetail from '../components/CardProductDetail'
import { useNavigation } from '@react-navigation/native'

const ProductDetail = ({ route }) => {

  const navigation = useNavigation()
  const { producto } = route.params
  const localId = useSelector(state => state.user.localId)
  const [triggerAddProducto] = usePostCartMutation()

  const handelAddProducto = async () => {

    const cartProducto = {
      ...producto,
      quantity: 1,
    }

    const result = await triggerAddProducto({ localId, cartProducto })
    navigation.navigate("CartStack")
  }

  return (
    <>
      <CardProductDetail producto={producto} style={styles.container}>
      </CardProductDetail>
      <Pressable style={styles.boton} onPress={handelAddProducto}>
        <Text style={styles.textBoton}>Agregar al carrito</Text>
      </Pressable>
    </>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  container: {
  },
  imagen: {
    with: 50,
    height: 50
  }
})