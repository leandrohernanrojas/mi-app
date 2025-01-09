import { StyleSheet, Text, View } from 'react-native'
import { color } from '../Global/colors'

const SubmitButton = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default SubmitButton

const styles = StyleSheet.create({
    container:{ 
        margin:15,
        width:100,
        backgroundColor:color.button,
        padding:10,
        borderRadius:5
    },
    text:{
        textAlign:"center",
        fontFamily:"Nunito"
    },
})