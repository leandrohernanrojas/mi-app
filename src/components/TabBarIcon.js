import { StyleSheet, Text, View } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { color } from '../Global/colors';

const TabBarIcon = ({ text, icon }) => {
  return (
    <View style={styles.container}>
      <MaterialIcons name={icon} size={28} color={color.primario} />

      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default TabBarIcon

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 3
  },
  text: {
    textAlign: "center",
    width: "100%"
  }
})