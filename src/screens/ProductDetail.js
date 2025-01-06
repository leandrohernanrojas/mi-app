import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import Header from '../components/Header'

import CardProductDetail from '../components/CardProductDetail'

const ProductDetail = ({route}) => {
  const {producto} = route.params

  return (
    <CardProductDetail producto={producto}></CardProductDetail>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  
})