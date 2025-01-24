import {  StyleSheet, Text, View,Pressable, FlatList } from 'react-native'
import CardCartProducto from '../components/CardCartProducto'
import { color } from '../Global/colors'
import { usePostOrdersMutation } from '../seervices/orders'
import { useSelector } from 'react-redux'
import { useDeleteCartMutation, useGetCartQuery } from '../seervices/cart'
import { useEffect, useState } from 'react'
import EmptyListComponent from '../components/EmptyListComponent'
import LoadingSpinner from "../components/LoadingSpinner"
import { useNavigation } from '@react-navigation/native'



const Cart = () => {

  const navigation = useNavigation()
  const [triggerPost] = usePostOrdersMutation()
  const [triggerDeleteCart] = useDeleteCartMutation()
  const localId = useSelector( state => state.user.localId)
  const {data:cart,isLoading}= useGetCartQuery({localId})
  const [total,setTotal] = useState(0)

  useEffect(()=>{
    if(cart){
      setTotal(cart.reduce((acc,item) => acc + item.precio * item.quantity ,0 ))
    }
  },[cart])
  
  
  const confirmCart = () => {
    const createdAt = new Date().toLocaleString()
    const order = {
      productos:cart,
      createdAt,
      total
    }
    triggerPost({order,localId})
    triggerDeleteCart({localId})
    navigation.navigate("OrdersStack")
  }
  if(isLoading) return <LoadingSpinner/>
  if(!cart)return <EmptyListComponent message="No hay productos agregados"/>

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CardCartProducto producto={item} />}
      />
      <View style={styles.containerFinalizarCompra}>
        <Text style={styles.text}>Total : {total} $ ARG</Text>
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