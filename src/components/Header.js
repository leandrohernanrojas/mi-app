import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import Button from './Button'
import { color } from '../Global/colors'
import { useEffect, useState } from 'react'

const Header = ({titulo}) => {
  const [portrait,setPortrait] = useState(false)
  const {width,height} = useWindowDimensions()
  
  useEffect(()=>{
    if(width > height){
      setPortrait(false)
    }else{
      setPortrait(true)
    }
  },[width,height])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Maradiana</Text>
      <Text style={styles.tituloPaginas}>{titulo}</Text>
      <Button />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:color.secundario,
        alignItems:"center",
        height: 50,
        position:"static",
    },
    text:{
        flex:1,
        paddingInline:"2%",
        padding:5,
        color:color.titulos,
        fontSize:30,
        fontFamily:"Berkshire",
    },
    tituloPaginas:{
      flex:1,
      color:color.titulos,
      // paddingInline:"4%",
      paddingLeft:20,
      // padding:5,
      fontSize:20, 
      fontFamily:"Berkshire",
    }
})