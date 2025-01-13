import { StyleSheet } from 'react-native';
import ShopSTack from './ShopSTack';
import CartStack from './CartStack';
import OrdersStack from './OrdersStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';


const Tab = createBottomTabNavigator()

const TabNavigator = () => {

    return (

        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
                tabBarLabelPosition: "beside-icon"
            }}
        >
            <Tab.Screen
                name="ShopStack"
                component={ShopSTack}
                options={{
                    tabBarIcon: ({ focused }) => <TabBarIcon text="Tienda" icon="shopping-bag" focused={focused} />
                }}
            />
            <Tab.Screen
                name="CartStack"
                component={CartStack}
                options={{
                    tabBarIcon: ({ focused }) => <TabBarIcon text="Carrito" icon="shopping-cart" focused={focused} />
                }}
            />
            <Tab.Screen
                name="OrdersStack"
                component={OrdersStack}
                options={{
                    tabBarIcon: ({ focused }) => <TabBarIcon text="Ordenes" icon="list" focused={focused} />
                }}
            />
        </Tab.Navigator>
    )
}


export default TabNavigator
const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: "rgba(238, 210, 169, 0.99)",

    },

})











