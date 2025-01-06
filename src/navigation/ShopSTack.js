import Header from '../components/Header';
import Home from '../screens/Home';
import ProductoCategory from "../screens/ProductCategory";
import ProductDetail from "../screens/ProductDetail";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

const ShopSTack = () => {
    
    return (
                <Stack.Navigator
                    screenOptions={({ route }) => ({
                        header: () => {
                            return <>
                                <Header titulo={
                                    route.name === "Home" ? "categorias" :
                                    route.name === "ProductCategory" ? route.params.categoria :
                                    route.params.producto.nombre
                                }
                                />
                            </>
                        }
                    })}
                    >
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="ProductCategory" component={ProductoCategory} />
                    <Stack.Screen name="ProductDetail" component={ProductDetail} />
                </Stack.Navigator>
    )
}

export default ShopSTack
