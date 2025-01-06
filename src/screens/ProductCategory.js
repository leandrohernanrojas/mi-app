import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import Product from '../components/CardProduct'
import Search from '../components/Search'
import { useGetProductosQuery } from '../seervices/shop'


const ProductCategory = ({route}) => {

  const {categoria} = route.params
  const {data,isSuccess} = useGetProductosQuery(categoria)
  const [palabraClave, setPalabraClave] = useState("")
  const [productos, setProductos] = useState([])

  useEffect(()=>{
    if(isSuccess){
      setProductos(Object.values(data))
    }
  },[isSuccess,data])

  useEffect(() => {
    if(isSuccess){

      setProductos(Object.values(data).filter(
        producto => producto.nombre.includes(palabraClave)))
      }

  }, [palabraClave,isSuccess])


  return (
    <View style={styles.container} >
      <Search onChangeKeyword={(t) => setPalabraClave(t)} />
      <FlatList
        data={productos}
        keyEstractor={item => item.id}
        renderItem={({ item }) => (
          <Product producto={item}></Product>
        )}
        contentContainerStyle={styles.containerCard}
      />
    </View>
  )
}

export default ProductCategory

const styles = StyleSheet.create({
  containerCard: {
    paddingBottom: "50%",
  },


})    