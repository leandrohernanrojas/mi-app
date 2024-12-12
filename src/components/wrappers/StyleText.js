import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StyleText = ({style,children}) => {
  return (
      <Text style={[styles.text,style]}>{children}</Text>
    
  )
}

export default StyleText

const styles = StyleSheet.create({
    text:{
        fontSize:10
    }
})