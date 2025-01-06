import { Image, StyleSheet, Text, View } from 'react-native'
import Button from './Button'
import { color } from '../Global/colors'
import logo from "../../assets/img/logo-md.png"



const Header = ({titulo}) => {

  return (
    <>
    <View style={styles.container}>
      <Image style={styles.img} source={require("../../assets/img/logo-md.png")}></Image>
      <Text style={styles.text}>Maradiana</Text>
      <Button />
    </View>
      <View>
      <Text style={styles.tituloPaginas}>{titulo}</Text>
      </View>
    </>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:color.secundario,
        alignItems:"center",
        height: 45,
        justifyContent:"space-between"
    },
    text:{
        color:color.titulos,
        fontSize:30,
        fontFamily:"Berkshire",
    },
    tituloPaginas:{
      backgroundColor:color.secundario,
      color:color.titulos,
      textAlign:"center",
      paddingBottom:10,
      fontSize:20, 
      fontFamily:"Berkshire",
    },
    img:{
      width:30,
      height:30,
      paddingInline:20
    }
})