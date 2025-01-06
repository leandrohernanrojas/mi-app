import { StyleSheet, FlatList, View,Text } from 'react-native'
import CardItemCategory from './CardItemCategory'
import { useGetCategoriasQuery } from '../seervices/shop'


const Categories = () => {
  const {data:categorias,isLoading} = useGetCategoriasQuery()

  if(isLoading) return <View><Text>cargando</Text></View>
  return (
      <FlatList
        data={categorias}
        keyExtractor={item => item}
        renderItem={({ item }) => <CardItemCategory item={item} />} 
        contentContainerStyle={styles.containerCard}
        />
  )
}

export default Categories

const styles = StyleSheet.create({
  containerCard:{
    paddingBottom:50
  }
})