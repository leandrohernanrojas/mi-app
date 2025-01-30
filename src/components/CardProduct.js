import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import { color } from '../Global/colors'
import { useNavigation } from '@react-navigation/native'


const Product = ({producto}) => {

  const navigation = useNavigation()

  return (
    <Pressable  style={styles.container} onPress={() => navigation.navigate("ProductDetail",{producto})}>
            <View style={styles.containerImg}>
              <Image style={styles.img} source={{uri:producto.imagen}} resizeMode='cover'/>
            </View>
            <Text style={styles.nombre}>{producto.nombre}</Text>
            <Text style={styles.text}>Categoria :{producto.categoria}</Text>
            <Text style={styles.text}>Precio : {producto.precio} $ ARG</Text>
          </Pressable>
  )
}

export default Product

const styles = StyleSheet.create({
    container:{
        backgroundColor: color.card,
        margin:20,
        marginInline:40,
        alignItems:"center",
        padding:6,
        borderRadius:5,
        gap:10,
      },
    text:{
      height:23,
      fontFamily:"Besley",
      fontSize:15,
    },
    containerImg:{
      width:"200",
      height:"200",
    },
    img:{
      width:"100%",
      height:"100%",
    },
    nombre:{
      fontFamily:"BesleyItalic",
      fontSize:16,
      height:23
    }
})