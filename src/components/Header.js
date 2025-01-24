import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { color } from '../Global/colors'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { deleteUser } from '../features/userSlice';
import { useDispatch } from 'react-redux';
import { deleteSesion } from '../config/dbSqlite';

const Header = ({ titulo }) => {
  const dispatch = useDispatch()

  const onLogout = () => {
    deleteSesion()
    dispatch(deleteUser())
  }
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.img} source={require("../../assets/img/logo-md.png")}></Image>
        <Text style={styles.text}>Maradiana</Text>
        <Pressable onPress={onLogout}>
          <MaterialIcons name="logout" size={24} color="black" />
        </Pressable>
      </View>
      <View>
        <Text style={styles.tituloPaginas}>{titulo}</Text>
      </View>
    </>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: color.secundario,
    alignItems: "center",
    height: 45,
    justifyContent: "space-between",
    paddingInline: 10
  },
  text: {
    color: color.titulos,
    fontSize: 30,
    fontFamily: "Berkshire",
  },
  tituloPaginas: {
    backgroundColor: color.secundario,
    color: color.titulos,
    textAlign: "center",
    paddingBottom: 10,
    fontSize: 20,
    fontFamily: "Berkshire",
  },
  img: {
    width: 30,
    height: 30,
    paddingInline: 20
  },

})