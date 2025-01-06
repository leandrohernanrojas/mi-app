import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Orders from '../screens/Orders'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()


const OrdersStack = () => {
  return (
    <Stack.Navigator
    screenOptions={({ route }) => ({
        header: () => {
            return <Header titulo="Ordenes" routeName={route.name}/>
        }
    })}>
        <Stack.Screen name="Orders" component={Orders}/>
    </Stack.Navigator>
  )
}

export default OrdersStack