import { StyleSheet, FlatList, View } from 'react-native'
import categoria from "../data/categoria.json"
import CardItemCategory from './CardItemCategory'


const Categories = () => {
  return (
    <View>
<FlatList
data={categoria}
keyExtractor={item => item}
renderItem={({item}) => (
  <CardItemCategory  item={item}/>
)}/>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({})