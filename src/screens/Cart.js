import { FlatList, StyleSheet, Text, View,Pressable } from 'react-native'
import cart from "../data/cart.json"
import CardCartProducto from '../components/CardCartProducto'
import { color } from '../Global/colors'
import { fonts } from '../Global/fonts'
import { usePostOrdersMutation } from '../seervices/orders'

const Cart = () => {
  const [triggerPost] = usePostOrdersMutation()

  const confirmCart = () => {
    triggerPost({id:"2",productos:[{id:"2"}],total:120})
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={cart.productos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CardCartProducto producto={item} />}
      />
      <View style={styles.containerFinalizarCompra}>
        <Text style={styles.text}>Total : {cart.total} $ ARG</Text>
        <Pressable style={styles.finalizarCompra} onPress={confirmCart}>
          <Text style={styles.text}>Finalizar Compra</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerFinalizarCompra:{
    backgroundColor:color.secundario,
    flexDirection:"row",
    justifyContent:"space-around",
    padding:15,
    alignItems:"center"
  },
  text:{
    fontSize:15,
    // backgroundColor:color.button,
    padding:10,
    borderRadius:5,
    fontFamily:"Besley"
  },
  finalizarCompra:{
    backgroundColor:color.button,
    borderRadius:5
  }
})