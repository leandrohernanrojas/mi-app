import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import { color } from '../Global/colors'
import { useNavigation } from '@react-navigation/native'


const Product = ({producto}) => {

  const navigation = useNavigation()

  return (
    <Pressable  style={styles.container} onPress={() => navigation.navigate("ProductDetail",{producto})}>
            <Image style={styles.img} source={{uri:producto.imagen}}/>
            <Text style={styles.nombre}>{producto.nombre}</Text>
            <Text style={styles.text}>categoria :{producto.categoria}</Text>
            <Text style={styles.text}>precio :{producto.precio}</Text>
          </Pressable>
  )
}

export default Product

const styles = StyleSheet.create({
  containerCard:{
    paddingBottom:1000
  },
    container:{
        backgroundColor: color.card,
        // justifyContent:"center",
        margin:20,
        marginInline:40,
        alignItems:"center",
        padding:6,
        borderRadius:5,
        gap:10,
      },
    text:{
      // backgroundColor:"red",
      height:23,
      fontFamily:"Besley",
      fontSize:15,
      
    },
    img:{
      width:100,
      height:100,
    },
    nombre:{
      fontFamily:"BesleyItalic",
      fontSize:16
    }
})