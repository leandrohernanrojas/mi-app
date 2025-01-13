import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigator from './TabNavigator';
import AuthStack from './AuthStack';

const Tab = createBottomTabNavigator()

const Navigator = () => {
    const isAuth = false

    return (
        <NavigationContainer>
            {isAuth ? <TabNavigator/> : <AuthStack/>}
        </NavigationContainer>
    )
}


export default Navigator
const styles = StyleSheet.create({
    

})

