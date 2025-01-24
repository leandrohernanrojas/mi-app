import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cart from '../screens/Cart'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const CartStack = () => {
  return (
    <Stack.Navigator
    screenOptions={({ route }) => ({
        header: () => {
            return <Header titulo="Carrito" routeName={route.name}/>
        }
    })}
    >
        <Stack.Screen name="Cart" component={Cart}/>
    </Stack.Navigator>
  )
}

export default CartStack

const styles = StyleSheet.create({})