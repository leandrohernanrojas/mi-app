import { FlatList, StyleSheet, Text, View } from 'react-native'
import productos from "../data/Productos.json"
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Item from '../components/ItemCategory'
import Search from '../components/Search'

const ProductCategory = ({categoria}) => {
    const [productoFiltrado,setProductosFiltrados] =useState([])
    const [palabraClave,setPalabraClave]= useState("")

    // useEffect(()=>{
    //   setProductosFiltrados(productos.filter(producto => producto.categoria === categoria))
    // },[])
    useEffect(()=>{
      if(palabraClave){
        return setProductosFiltrados(productos.filter(producto => producto.categoria === categoria 
          && producto.nombre.includes(palabraClave)))
      }
    setProductosFiltrados(productos.filter(producto => producto.categoria === categoria))
    },[palabraClave])


  return (
    <View style={styles.container}>
        <Header titulo={categoria}/>
        <Search  onChangeKeyword={(t)=> setPalabraClave(t)}/>
        <FlatList
        data={productoFiltrado}
        keyEstractor={item=> item.id}
        renderItem={({item})=>(
          <Item item={item}></Item>
        )}
        style={styles.item}/>
    </View>
  )
}

export default ProductCategory

const styles = StyleSheet.create({
  container:{
    // flex:1,
    alignContent:"center",
  },
  item:{
    
    
  }
})    