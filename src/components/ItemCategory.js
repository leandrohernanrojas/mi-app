import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import { color } from '../Global/colors'


const Item = ({item}) => {
  return (
    <Pressable style={styles.container}>
            <Image style={styles.img} source={{uri:item.imagen}}/>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.text}>categoria :{item.categoria}</Text>
            <Text style={styles.text}>precio :{item.precio}</Text>
          </Pressable>
  )
}

export default Item

const styles = StyleSheet.create({
    container:{
        backgroundColor: color.card,
        // justifyContent:"center",
        margin:20,
        marginInline:40,
        alignItems:"center",
        padding:6,
        borderRadius:5,
        gap:10
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