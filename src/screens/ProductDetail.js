import { StyleSheet, Text, View,  Pressable } from 'react-native'
import { useGetProductoCartQuery, usePostCartMutation } from '../seervices/cart'
import { useSelector } from 'react-redux'
import CardProductDetail from '../components/CardProductDetail'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import Counter from '../components/Counter'
import { color } from '../Global/colors'

const ProductDetail = ({ route }) => {

  const navigation = useNavigation()
  const { producto } = route.params
  const localId = useSelector(state => state.user.localId)
  const [triggerAddProducto] = usePostCartMutation()
  const { data: productoCart } = useGetProductoCartQuery({ localId, productoId: producto.id })
  const [quantity, setQuantity] = useState(1)

  const increment = () => {
    const cartQuantity = productoCart ? productoCart.quantity : 0
    if (quantity >= (producto.stock - cartQuantity)) return
    setQuantity(quantity + 1)
  }
  const decrement = () => {
    if (quantity === 1) return
    setQuantity(quantity - 1)
  }

  const handelAddProducto = async () => {
    const cartQuantity = productoCart ? productoCart.quantity : 0
    if ((producto.stock - cartQuantity) === 0) return
    const newQuantity = quantity + cartQuantity
    const cartProducto = {
      ...producto,
      quantity: newQuantity
    }

    const result = await triggerAddProducto({ localId, cartProducto })
    setQuantity(1)
    navigation.navigate("CartStack")
  }

  return (
    <View style={styles.container}>
      <CardProductDetail producto={producto}/>
      <Counter quantity={quantity} increment={increment} decrement={decrement} />
      <Pressable style={styles.boton} onPress={handelAddProducto}>
        <Text style={styles.textBoton}>Agregar al carrito</Text>
      </Pressable>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    backgroundColor:color.fondo,
    gap:5
  },
  textBoton:{
    backgroundColor:color.button,
    fontSize:20,
    padding:10,
    borderRadius:5,
    fontFamily:"Besley",
    height:50
  },

})